import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { User } from './user/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 30011,
      username: 'root',
      password: 'Prueb_123',
      database: 'db_chat',
      entities: [User],
      synchronize: true,
    }),
    UserModule
  ],
})
export class AppModule { }
