import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as fs from 'fs';
import * as path from 'path';
import 'dotenv/config';

async function bootstrap() {

  const httpsOptions =
    fs.existsSync(path.join(__dirname, '../ssl/key.pem')) &&
      fs.existsSync(path.join(__dirname, '../ssl/cert.pem'))
      ? {
        key: fs.readFileSync(path.join(__dirname, '../ssl/key.pem')),
        cert: fs.readFileSync(path.join(__dirname, '../ssl/cert.pem')),
      }
      : undefined;

  // Si hay certificados usar HTTPS si no HTTP
  const app = httpsOptions
    ? await NestFactory.create(AppModule, { httpsOptions })
    : await NestFactory.create(AppModule);

  // Validaciones globales
  app.useGlobalPipes(new ValidationPipe());

  // Configuración Swagger
  const config = new DocumentBuilder()
    .setTitle('Chat Service')
    .setDescription('Develop Stiven')
    .setVersion('1.0')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        name: 'Authorization',
        description: 'Introducir el token JWT con el formato: Bearer <token>',
        in: 'header',
      },
      'access-token',
    )
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  const PORT = process.env.PORT || 3000;
  await app.listen(PORT);

}

bootstrap();
