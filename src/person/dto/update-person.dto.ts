import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreatePersonDto } from './create-person.dto';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class UpdatePersonDto extends PartialType(CreatePersonDto) {
  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  id: number;
}
