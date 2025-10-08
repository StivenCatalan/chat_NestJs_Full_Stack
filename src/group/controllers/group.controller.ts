import { Controller, Get, Param } from '@nestjs/common';
import { GroupService } from '../services/group.service';

@Controller('group')
export class GroupController {
  constructor(private groupservice: GroupService) {}

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
}
