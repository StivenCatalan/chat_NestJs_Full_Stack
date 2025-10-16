import { IsNotEmpty, IsNumber } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { CreateFileDto } from "./create-file-dto";

export class UpdateFileDto extends CreateFileDto {
    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    id: number
}
