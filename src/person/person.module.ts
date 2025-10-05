import { Module } from "@nestjs/common";
import { Person } from "./entities/person.entity";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
    imports: [
        TypeOrmModule.forFeature([Person])
    ]
})
export class PersonModule {}