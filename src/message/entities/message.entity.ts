import { Base } from 'src/common/entities/base.entity';
import { Group } from 'src/group/entities/group.entity';
import { Person } from 'src/person/entities/person.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { TypeMessage } from '../enums/type.enum';

@Entity()
export class Message extends Base {
  @Column({ length: 500 })
  message: string;

  @ManyToOne(() => Person, (person) => person.sentMessages, { nullable: false })
  @JoinColumn({ name: 'personSendId' })
  sender: Person;

  @ManyToOne(() => Person, (person) => person.receivedMessages, { nullable: true })
  @JoinColumn({ name: 'personId' })
  receiver: Person | null;

  @ManyToOne(() => Group, (group) => group.messages, { nullable: true })
  @JoinColumn({ name: 'groupId' })
  group: Group | null;

  @Column({ length: 50 })
  type: TypeMessage;
}
