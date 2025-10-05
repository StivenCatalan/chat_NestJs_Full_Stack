import { Module } from "@nestjs/common";
import { Member } from "./entities/member.entity";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
    imports: [
        TypeOrmModule.forFeature([Member])
    ]
})
export class MemberModule {}