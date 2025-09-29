
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, OneToOne, JoinColumn } from 'typeorm';
import { Person } from 'src/person/person.entity';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt?: Date;

    @Column({
        length: 100
    })
    email: string;

    @Column()
    password: string;

    @OneToOne(() => Person, person => person.id)
    @JoinColumn({ name: 'personId' })
    person: Person;

}
