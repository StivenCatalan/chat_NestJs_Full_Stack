import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { MessageService } from '../services/message.service';
import { CreateMessage } from '../dto/create-message';

@Controller('messages')
export class MessageController {
  constructor(private messageService: MessageService) {}

  @Get()
  async findAllMessages() {
    const messages = await this.messageService.findAllMessages();
    return messages;
  }
  @Get('/:id')
  async findMessageById(@Param('id') id: number) {
    const message = await this.messageService.findMessageById(id);
    return message;
  }
  @Post()
  async create(@Body() input: CreateMessage) {
    return await this.messageService.create(input);
  }
}
