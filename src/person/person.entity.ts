import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Person {
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
    length: 50
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

  @Column()
  fileId: number;
}
