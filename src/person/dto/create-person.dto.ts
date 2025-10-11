import { StringField } from 'src/common/decorators/string-field.decorator';

export class CreatePerson {
  @StringField()
  firstName: string;

  @StringField()
  middleName: string;

  @StringField()
  lastName: string;

  @StringField()
  middleLastName: string;

  @StringField()
  address: string;

  @StringField()
  state: string;
}
