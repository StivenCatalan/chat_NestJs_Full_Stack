import { Base } from 'src/common/entities/base.entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class File extends Base {
  @Column({
    length: 100,
  })
  name: string;
  @Column({
    length: 50,
  })
  extension: string;

  @Column()
  binary: Buffer;
}
