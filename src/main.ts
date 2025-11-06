import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as fs from 'fs';

async function bootstrap() {

  let httpsOptions;

  if (process.env.HTTPS == 'true')
    httpsOptions = {
      cert: fs.readFileSync(process.env.SSL_CERT as any),
      key: fs.readFileSync(process.env.SSL_KEY as any)
    }

  const app = process.env.HTTPS == 'true'
    ? await NestFactory.create(AppModule, { httpsOptions })
    : await NestFactory.create(AppModule);

  // validation globals
  app.useGlobalPipes(new ValidationPipe());

  // configuration Swagger
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
