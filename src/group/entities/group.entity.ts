import { Column, Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm';
import { Message } from 'src/message/entities/message.entity';
import { Member } from 'src/member/entities/member.entity';
import { Base } from 'src/common/entities/base.entity';
import { File } from 'src/file/entities/file.entity';

@Entity()
export class Group extends Base {
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
