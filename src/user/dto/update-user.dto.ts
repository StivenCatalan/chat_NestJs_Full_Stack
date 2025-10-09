import {IsNotEmpty, IsNumber } from "class-validator";
import { CreateUser } from "./create-user.dto";
import { ApiProperty } from "@nestjs/swagger";

export class UpdateUserDto extends CreateUser {
    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    id: number;
}