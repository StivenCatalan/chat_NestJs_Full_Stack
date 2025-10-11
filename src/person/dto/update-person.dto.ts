import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreatePerson } from './create-person.dto';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class UpdatePerson extends PartialType(CreatePerson) {
  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  id: number;
}
