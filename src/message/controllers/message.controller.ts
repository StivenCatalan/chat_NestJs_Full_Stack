import { Controller, Get, Param } from '@nestjs/common';
import { MessageService } from '../services/message.service';

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
}
