import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Any request send to the server will go through the ValidationPipe
  // which will handle any class validators in the model classes (@IsEmail, @IsString)
  app.useGlobalPipes(new ValidationPipe());

  // const configService = app.get(ConfigService);
  // const port = configService.get<string>('PORT');

  // await app.listen(port);
  await app.listen(3000);
}
bootstrap();
