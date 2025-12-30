import { applyDecorators } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export function StringField(description?: string): PropertyDecorator {
  return applyDecorators(
    ApiProperty({ description, type: String }),
    IsString(),
    IsNotEmpty(),
  );
}
