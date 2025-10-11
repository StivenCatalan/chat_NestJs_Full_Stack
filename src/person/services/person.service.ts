import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Person } from '../entities/person.entity';
import { Repository } from 'typeorm';
import { CreatePerson } from '../dto/create-person';
import { UpdatePerson } from '../dto/update-person';

@Injectable()
export class PersonService {
  constructor(
    @InjectRepository(Person)
    private personRepository: Repository<Person>,
  ) {}

  async findAllPersons(): Promise<Person[]> {
    const persons = await this.personRepository.find();
    return persons;
  }

  async findPersonById(id: number): Promise<Person | null> {
    const person = await this.personRepository.findOne({
      where: {
        id: id,
      },
    });
    return person;
  }

  async create(input: CreatePerson): Promise<Person> {
    const newPerson = new Person();

    newPerson.firstName = input.firstName;
    newPerson.middleName = input.middleName;
    newPerson.lastName = input.lastName;
    newPerson.middleLastName = input.middleLastName;
    newPerson.address = input.address;
    newPerson.state = input.state;

    return await this.personRepository.save(newPerson);
  }

  async Update(input: UpdatePerson): Promise<Person> {
    let person = await this.personRepository.findOne({
      where: {
        id: input.id,
      },
    });
    if (!person) {
      throw new HttpException('User Not found', HttpStatus.NOT_FOUND);
    }
    // Si input es undefined deja el valor anterior
    person.firstName = input.firstName ?? person.firstName;
    person.middleName = input.middleName ?? person.middleName;
    person.lastName = input.lastName ?? person.lastName;
    person.middleLastName = input.middleLastName ?? person.middleLastName;
    person.address = input.address ?? person.address;
    person.state = input.state ?? person.state;

    person = await this.personRepository.save(person);

    return person;
  }
}
