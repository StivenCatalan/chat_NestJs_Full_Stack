import { Module } from "@nestjs/common";
import { File } from "./entities/file.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { FileController } from "./controllers/file.controller";
import { FileService } from "./services/file.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([File])
    ],
    controllers:[FileController],
    providers:[FileService]
})
export class FileModule {}