import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreatePerson } from './create-person';
import { IsNotEmpty, IsNumber } from 'class-validator';

// EL PartialType es para que las cosas heredadadas de otra clase puedan ser opcionales en esta UAAA MUY FACIL emparejen con gente real.

// 30 minutos mas tarde.... perate ahi wey esta vuelta me hizo perder 30 minutos buscando un error, resulta que al hacerlos (opcionales) con el permiso de los DTOS puede aceptar que los datos sean undefined y pasa que en la entidad yo le puse que sea tipo String y solo string, bueno ahora me toca validar que solo sea string desde el codigo cule falla todo por no querer repetir codigo.

export class UpdatePerson extends PartialType(CreatePerson) {
  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  id: number;
}
