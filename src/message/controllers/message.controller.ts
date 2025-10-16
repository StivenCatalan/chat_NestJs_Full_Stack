import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { MessageService } from '../services/message.service';
import { CreateMessageDto } from '../dto/create-message.dto';
import { updateMessageDto } from '../dto/update-message-dto';

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
  async create(@Body() input: CreateMessageDto) {
    return await this.messageService.create(input);
  }

  @Put()
  async update(@Body() input:updateMessageDto) {
    return await this.messageService.update(input)
  }
}
