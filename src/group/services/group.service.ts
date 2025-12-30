import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Group } from '../entities/group.entity';
import { Repository } from 'typeorm';
import { CreateGroupDto } from '../dto/create-group-dto';
import { UpdateGroupDto } from '../dto/update-group-dto';

@Injectable()
export class GroupService {
  constructor(
    @InjectRepository(Group)
    private groupRepository: Repository<Group>,
  ) { }

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

  async create(input: CreateGroupDto): Promise<Group> {
    const newGroup = this.groupRepository.create(input)
    return await this.groupRepository.save(newGroup)
  }

  async update(input: UpdateGroupDto): Promise<Group> {
    let group = await this.groupRepository.findOne({
      where: {
        id: input.id
      }
    })
    if (!group) throw new HttpException('Group Not found', HttpStatus.NOT_FOUND);

    group.name = input.name
    group.description = input.description

    group = await this.groupRepository.save(group)

    return group
  }

}
