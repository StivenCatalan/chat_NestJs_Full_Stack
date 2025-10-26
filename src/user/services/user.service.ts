import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UpdateUserDto } from '../dto/update-user.dto';
import { CreateUserDto } from '../dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) { }

  async findAll(): Promise<User[]> {
    const users = await this.userRepository.find();
    return users;
  }

  async findOne(id: number): Promise<User | null> {
    const user = await this.userRepository.findOne({
      where: {
        id,
      },
    });
    return user;
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = await this.userRepository.findOne({
      where: { email },
    });
    return user;
  }

  async create(input: CreateUserDto): Promise<User> {
    const newUser = this.userRepository.create(input);
    return await this.userRepository.save(newUser);
  }

  async update(input: UpdateUserDto): Promise<User> {
    let user = await this.userRepository.findOne({
      select: ['id', 'email', 'password'],
      where: {
        id: input.id,
      },
    });

    if (!user) throw new HttpException('User Not found', HttpStatus.NOT_FOUND);

    user.password = input.password;
    user.email = input.email;

    user = await this.userRepository.save(user);

    return user;
  }
}
