import { NestFactory } from '@nestjs/core';
import { StreamersModule } from './streamers/streamers.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(StreamersModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
