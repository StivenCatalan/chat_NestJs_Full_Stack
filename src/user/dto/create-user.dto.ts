import { StringField } from 'src/common/decoradores-dtos/string-field.decorator';
export class CreateUser {

  @StringField('Example: Kendo@gmail.com')
  email: string;

  @StringField('Example: Contraseña123')
  password: string;
}
