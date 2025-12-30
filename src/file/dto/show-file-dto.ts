import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsNotEmpty, IsNumber } from "class-validator";

export class ShowFileDto {
  @ApiProperty()
  @IsNotEmpty()
  @Type(() => Number) // <-- Esto convierte "5" a 5 antes de validar
  @IsNumber()
  id: number;
}
