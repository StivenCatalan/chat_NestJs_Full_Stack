import { Base } from 'src/common/entities/base.entity';
import { Member } from 'src/member/entities/member.entity';
import { Message } from 'src/message/entities/message.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity()
export class Person extends Base {
  @Column({
    length: 50,
  })
  firstName: string;

  @Column({
    length: 50,
  })
  middleName: string;

  @Column({
    length: 50,
  })
  lastName: string;

  @Column({
    length: 50,
  })
  middleLastName: string;

  @Column({
    length: 100,
  })
  address: string;

  @Column({
    length: 50,
  })
  state: string;

  @OneToMany(() => Member, (member) => member.person)
  members: Member[];

  @OneToMany(() => Message, (message) => message.sender)
  sentMessages: Message[];

  @OneToMany(() => Message, (message) => message.receiver)
  receivedMessages: Message[];

  @Column({ nullable: true })
  fileId: number;
}
