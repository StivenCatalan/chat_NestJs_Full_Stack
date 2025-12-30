import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { PersonModule } from './person/person.module';
import { FileModule } from './file/file.module';
import { GroupModule } from './group/group.module';
import { MemberModule } from './member/member.module';
import { MessageModule } from './message/message.module';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { SecurityModule } from './security/security.module';
import { EventEmitterModule } from '@nestjs/event-emitter';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        DB_TYPE: Joi.string().required(),
        DB_HOST: Joi.string().required(),
        DB_USER: Joi.string().required(),
        DB_PASSWORD: Joi.string().allow('').required(),
        DB_NAME: Joi.string().required(),
        DB_PORT: Joi.number().port().default(3306),
        SECRET: Joi.string().required(),
        HTTPS: Joi.boolean().required(),
        SSL_CERT: Joi.string().optional(),
        SSL_KEY: Joi.string().optional(),
      }),
    }),
    EventEmitterModule.forRoot({
      wildcard: false,
      delimiter: '.',
      maxListeners: 20,
      // ojo: esto NO hace que sea “async”; sólo gestiona promesas en emitAsync
      // ignoreErrors: false, // si lo activás, oculta errores (no recomendado al inicio)
    }),
    TypeOrmModule.forRoot({
      type: process.env.DB_TYPE as any,
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      autoLoadEntities: true,
      synchronize: true,
    }),
    UserModule, PersonModule, FileModule, GroupModule, MemberModule, MessageModule, SecurityModule
  ],
})
export class AppModule { }
