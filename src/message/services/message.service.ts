import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Message } from '../entities/message.entity';
import { Repository } from 'typeorm';
import { CreateMessage } from '../dto/create-message';
import { PersonService } from 'src/person/services/person.service';
import { TypeMessage } from '../enums/type.enum';
import { Person } from 'src/person/entities/person.entity';
import { GroupService } from 'src/group/services/group.service';
import { Group } from 'src/group/entities/group.entity';

@Injectable()
export class MessageService {
  constructor(
    @InjectRepository(Message)
    private messageRepository: Repository<Message>,
    private personService: PersonService,
    private groupService: GroupService,
  ) {}

  async findAllMessages(): Promise<Message[]> {
    const messages = await this.messageRepository.find();
    return messages;
  }

  async findMessageById(id: number): Promise<Message | null> {
    const message = await this.messageRepository.findOne({
      where: {
        id: id,
      },
    });
    return message;
  }
  async create(input: CreateMessage): Promise<Message> {
    const newMessage = this.messageRepository.create(input);

    const sender = (await this.personService.findPersonById(
      input.personSendId,
    )) as Person;
    if (!sender)
      throw new HttpException('Person Send Not found', HttpStatus.NOT_FOUND);

    let receiver: Person | null = null;
    let group: Group | null = null;

    if (input.type === TypeMessage.PERSON && input.personId) {
      receiver = (await this.personService.findPersonById(input.personId,)) as Person;
      if (!receiver)
        throw new HttpException('Receiver not found', HttpStatus.NOT_FOUND);
    }

    if (input.type === TypeMessage.GROUP && input.groupId) {
      group = (await this.groupService.findGroupById(input.groupId)) as Group;
      if (!group)
        throw new HttpException('Group not found', HttpStatus.NOT_FOUND);
    }

    newMessage.sender = sender;
    newMessage.receiver = receiver;
    newMessage.group = group;

    return await this.messageRepository.save(newMessage);
  }
}
