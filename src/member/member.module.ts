import { Module } from "@nestjs/common";
import { Member } from "./member.entity";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
    imports: [
        TypeOrmModule.forFeature([Member])
    ]
})
export class MemberModule {}