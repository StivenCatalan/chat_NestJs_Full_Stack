import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber } from "class-validator";
import { StringField } from "src/common/decorators/string-field.decorator";

export class CreateGroupDto {
  @StringField()
  @ApiProperty()
  name: string;

  @StringField()
  @ApiProperty()
  description: string;
}
