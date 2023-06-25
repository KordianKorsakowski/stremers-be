import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppsModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppsModule);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  app.enableCors({ origin: '*' });
  await app.listen(5000);
}
bootstrap();
