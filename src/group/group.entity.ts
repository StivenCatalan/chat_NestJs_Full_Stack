import { File } from 'src/file/file.entity';
import { Message } from 'src/message/message.entity';
import { Member } from 'src/member/member.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Group {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt?: Date;

  @Column({
    length: 50,
  })
  name: string;

  @Column({
    length: 100,
  })
  description: string;

  @OneToMany(() => Message, (message) => message.group)
  messages: Message[];

  @OneToMany(() => Member, (member) => member.group)
  members: Member[];

  @OneToOne(() => File)
  @JoinColumn({ name: 'fileId' })
  file: File;

  @Column({ nullable: true })
  fileId: number;
}
