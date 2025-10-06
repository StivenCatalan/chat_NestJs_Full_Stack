import { Base } from 'src/common/entities/base.entity';
import { Group } from 'src/group/entities/group.entity';
import { Person } from 'src/person/entities/person.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity()
export class Message extends Base {
  @Column({
    length: 500,
  })
  message: string;

  @ManyToOne(() => Person, (person) => person.sentMessages)
  @JoinColumn({ name: 'personSendId' })
  sender: Person;

  @ManyToOne(() => Person, (person) => person.receivedMessages)
  @JoinColumn({ name: 'personId' })
  receiver: Person;

  @ManyToOne(() => Group, (group) => group.messages)
  @JoinColumn({ name: 'groupId' })
  group: Group;

  @Column({ length: 50 })
  type: string;
}
