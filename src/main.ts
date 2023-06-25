import { NestFactory } from '@nestjs/core';
import { StreamersModule } from './streamers/streamers.module';

async function bootstrap() {
  const app = await NestFactory.create(StreamersModule);
  await app.listen(3000);
}
bootstrap();
