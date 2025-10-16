import { ApiProperty } from "@nestjs/swagger";
import { StringField } from "src/common/decorators/string-field.decorator";

export class CreateFileDto {
  @StringField()
  @ApiProperty()
  name: string;

  @StringField()
  @ApiProperty()
  extension: string;
}
