import { Controller, Get, Param } from '@nestjs/common';
import { PersonService } from '../services/person.service';

@Controller('person')
export class PersonController {
  constructor(private personService: PersonService) {}
  @Get()
  async finSllPersons() {
    const persons = await this.personService.findAllPersons();
    return persons;
  }

  @Get('/:id')
  async findPersonById(@Param('id') id: number) {
    const person = await this.personService.findPersonById(id);
    return person;
  }
}
