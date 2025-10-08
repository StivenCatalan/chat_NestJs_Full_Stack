import { Module } from "@nestjs/common";
import { Message } from "./entities/message.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { MessageController } from "./controllers/message.controller";
import { MessageService } from "./services/message.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([Message])
    ],
    controllers: [MessageController],
    providers: [MessageService],
})
export class MessageModule {}