import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
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
  message: string;q

  @Column()
  personId: number;

  @Column()
  personSendId: number;

  @Column()
  groupId: number;

  @Column({
    length: 50,
  })
  type: string;
}
