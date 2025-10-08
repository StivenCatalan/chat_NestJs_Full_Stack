import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Message } from '../entities/message.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MessageService {
  constructor(
    @InjectRepository(Message)
    private messageRepository: Repository<Message>,
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
}
