import { IsNotEmpty, IsNumber } from "class-validator";
import { CreateGroupDto } from "./create-group-dto";
import { ApiProperty } from "@nestjs/swagger";

export class UpdateGroupDto extends CreateGroupDto {
    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    id: number
}
