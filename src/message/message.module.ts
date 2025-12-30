import { Module } from "@nestjs/common";
import { Message } from "./entities/message.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { MessageController } from "./controllers/message.controller";
import { MessageService } from "./services/message.service";
import { PersonService } from "src/person/services/person.service";
import { Person } from "src/person/entities/person.entity";
import { Group } from "src/group/entities/group.entity";
import { GroupService } from "src/group/services/group.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([Message, Person, Group])
    ],
    controllers: [MessageController],
    providers: [MessageService, PersonService, GroupService],
})
export class MessageModule { }