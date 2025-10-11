import { Module } from "@nestjs/common";
import { Message } from "./entities/message.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { MessageController } from "./controllers/message.controller";
import { MessageService } from "./services/message.service";
import { PersonService } from "src/person/services/person.service";
import { Person } from "src/person/entities/person.entity";

@Module({
    imports: [
        TypeOrmModule.forFeature([Message, Person])
    ],
    controllers: [MessageController],
    providers: [MessageService, PersonService],
})
export class MessageModule { }