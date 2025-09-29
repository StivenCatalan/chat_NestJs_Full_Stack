import { File } from 'src/file/file.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
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

  @OneToOne(()=>File, file => file.id)
  @JoinColumn({ name: 'fileId' })
  file: File;
}
