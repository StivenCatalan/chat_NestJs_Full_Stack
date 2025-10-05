import { Base } from 'src/common/entities/base.entity';
import { Group } from 'src/group/entities/group.entity';
import { Person } from 'src/person/entities/person.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity()
export class Member extends Base {
  @ManyToOne(() => Person, (person) => person.members)
  @JoinColumn({ name: 'personId' })
  person: Person;

  @Column()
  personId: number;

  @ManyToOne(() => Group, (group) => group.members)
  @JoinColumn({ name: 'groupId' })
  group: Group;

  @Column()
  groupId: number;
}
