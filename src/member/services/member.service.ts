import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Member } from '../entities/member.entity';

@Injectable()
export class MemberService {
  constructor(
    @InjectRepository(Member)
    private memberRepository: Repository<Member>,
  ) {}

  async findAllMembers(): Promise<Member[]> {
    const members = await this.memberRepository.find();
    return members;
  }

  async findMemberById(id: number): Promise<Member | null> {
    const member = await this.memberRepository.findOne({
      where: {
        id: id,
      },
    });
    return member;
  }
}
