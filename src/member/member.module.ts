import { Module } from "@nestjs/common";
import { Member } from "./entities/member.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { MemberController } from "./controllers/member.controller";
import { MemberService } from "./services/member.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([Member])
    ],
    controllers:[MemberController],
    providers:[MemberService]
})
export class MemberModule {}