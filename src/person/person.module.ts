import { Module } from "@nestjs/common";
import { Person } from "./entities/person.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PersonController } from "./controllers/person.controller";
import { PersonService } from "./services/person.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([Person])
    ],
    controllers: [PersonController],
    providers: [PersonService],
    exports: [PersonService]
})
export class PersonModule { }