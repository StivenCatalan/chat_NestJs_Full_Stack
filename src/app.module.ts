import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { User } from './user/user.entity';
import { PersonModule } from './person/person.module';
import { FileModule } from './file/file.module';
import { group } from 'console';
import { GroupModule } from './group/group.module';
import { MemberModule } from './member/member.module';
import { Message } from './message/message.entity';
import { MessageModule } from './message/message.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'db_chat',
      autoLoadEntities: true,
      synchronize: true,
    }),
    UserModule, PersonModule, FileModule, GroupModule, MemberModule, MessageModule
  ],
})
export class AppModule { }
