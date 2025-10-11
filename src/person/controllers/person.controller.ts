import { Body, Controller, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { PersonService } from '../services/person.service';
import { CreatePerson } from '../dto/create-person.dto';
import { UpdatePerson } from '../dto/update-person.dto';

@Controller('person')
export class PersonController {
  constructor(private personService: PersonService) {}
  @Get()
  async findAllPersons() {
    const persons = await this.personService.findAllPersons();
    return persons;
  }

  @Get('/:id')
  async findPersonById(@Param('id') id: number) {
    const person = await this.personService.findPersonById(id);
    return person;
  }

  @Post()
  async create(@Body() input: CreatePerson) {
    return await this.personService.create(input);
  }

  @Put()
  async update (
    @Body() input:UpdatePerson
  ){
    return await this.personService.Update(input)

  }

}
