import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional } from 'class-validator';
import { StringField } from 'src/common/decoradores-dtos/string-field.decorator';

export class CreateMessage {
  @StringField()
  @ApiProperty()
  message: string;

  @StringField()
  @ApiProperty()
  type: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  personSendId: number;

  @IsOptional()
  @IsNumber()
  @ApiProperty()
  personId?: number;

  @IsOptional()
  @IsNumber()
  @ApiProperty()
  groupId?: number;
}
