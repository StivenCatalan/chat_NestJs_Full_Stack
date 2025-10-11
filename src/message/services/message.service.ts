import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Message } from '../entities/message.entity';
import { Repository } from 'typeorm';
import { CreateMessage } from '../dto/create-message';
import { PersonService } from 'src/person/services/person.service';
import { TypeMessage } from '../enums/type.enum';
import { Person } from 'src/person/entities/person.entity';

@Injectable()
export class MessageService {
  constructor(
    @InjectRepository(Message)
    private messageRepository: Repository<Message>,
    private personService: PersonService
  ) { }

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
    let receiver: Person = new Person();
    let sender: Person = new Person();

    const newMessage = this.messageRepository.create(input);

    sender = await this.personService.findPersonById(input.personSendId) as Person
    if (!sender)
      throw new HttpException('Person Send Not found', HttpStatus.NOT_FOUND);

    if (input.personId && input.type === TypeMessage.PERSON)
      receiver = await this.personService.findPersonById(input.personId) as Person

    newMessage.sender = sender
    newMessage.receiver = receiver

    return await this.messageRepository.save(newMessage);
  }
}
