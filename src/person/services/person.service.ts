import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Person } from '../entities/person.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PersonService {
  constructor(
    @InjectRepository(Person)
    private personRepsository: Repository<Person>,
  ) {}

  async findAllPersons(): Promise<Person[]> {
    const persons = await this.personRepsository.find();
    return persons;
  }

  async findPersonById(id: number): Promise<Person | null> {
    const person = await this.personRepsository.findOne({
      where: {
        id: id,
      },
    });
    return person;
  }
}
