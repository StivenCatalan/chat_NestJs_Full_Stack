
import { Entity, Column, OneToOne, JoinColumn } from 'typeorm';
import { Base } from 'src/common/entities/base.entity';
import { Person } from 'src/person/person.entity';

@Entity()
export class User extends Base {

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