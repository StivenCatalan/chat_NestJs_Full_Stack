import { StringField } from "src/common/decorators/string-field.decorator";

export class LoginDto {

  @StringField('Example: Kendo@gmail.com')
  email: string;

  @StringField('Example: Contraseña123')
  password: string;
}
