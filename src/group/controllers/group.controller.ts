import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { GroupService } from '../services/group.service';
import { CreateGroupDto } from '../dto/create-group-dto';
import { UpdateGroupDto } from '../dto/update-group-dto';

@Controller('group')
export class GroupController {
  constructor(private groupservice: GroupService) { }

  @Get()
  async findAllGroups() {
    const groups = await this.groupservice.findAllGroups();
    return groups;
  }

  @Get('/:id')
  async findGroupById(@Param('id') id: number) {
    const group = await this.groupservice.findGroupById(id);
    return group;
  }

  @Post()
  async create(@Body() input: CreateGroupDto) {
    return await this.groupservice.create(input)
  }

  @Put()
  async update(@Body() input: UpdateGroupDto) {
    return await this.groupservice.update(input)

  }
}
