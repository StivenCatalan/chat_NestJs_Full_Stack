import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Group } from '../entities/group.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GroupService {
  constructor(
    @InjectRepository(Group)
    private groupRepository: Repository<Group>,
  ) {}

  async findAllGroups(): Promise<Group[]> {
    const groups = await this.groupRepository.find();
    return groups;
  }

  async findGroupById(id: number): Promise<Group | null> {
    const group = await this.groupRepository.findOne({
      where: {
        id: id,
      },
    });
    return group;
  }
}
