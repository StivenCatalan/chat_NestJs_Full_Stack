import { Group } from 'src/group/group.entity';
import { Person } from 'src/person/person.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Message {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt?: Date;

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
