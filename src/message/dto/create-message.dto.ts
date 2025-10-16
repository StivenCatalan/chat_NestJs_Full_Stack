import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';
import { StringField } from 'src/common/decorators/string-field.decorator';
import { TypeMessage } from '../enums/type.enum';

export class CreateMessageDto {
  @StringField()
  @ApiProperty()
  message: string;

  @StringField()
  @ApiProperty({
    enum: TypeMessage,
    example: [TypeMessage.GROUP, TypeMessage.PERSON]
  })
  @IsEnum(TypeMessage)
  type: TypeMessage;

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
