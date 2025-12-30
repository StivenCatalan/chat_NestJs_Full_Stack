import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber } from "class-validator";
import { StringField } from "src/common/decorators/string-field.decorator";

export class updateMessageDto {
    @StringField()
    @ApiProperty()
    message: string;

    @IsNumber()
    @ApiProperty()
    @IsNotEmpty()
    id: number;
}