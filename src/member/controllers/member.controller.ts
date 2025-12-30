import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { MemberService } from '../services/member.service';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth } from '@nestjs/swagger';

@UseGuards(AuthGuard('jwt'))
@ApiBearerAuth('access-token')
@Controller('member')
export class MemberController {
  constructor(private memberservice: MemberService) {}
  
  @Get()
  async findAllMembers() {
    const members = await this.memberservice.findAllMembers();
    return members;
  }

  @Get('/:id')
  async findMemberById(@Param('id') id: number) {
    const group = await this.memberservice.findMemberById(id);
    return group;
  }
}
