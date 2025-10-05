import { Module } from "@nestjs/common";
import { Message } from "./entities/message.entity";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
    imports: [
        TypeOrmModule.forFeature([Message])
    ]
})
export class MessageModule {}