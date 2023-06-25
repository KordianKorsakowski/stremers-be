import { Module } from '@nestjs/common';
import { StreamersController } from './streamers.controller';

@Module({
  controllers: [StreamersController],
})
export class StreamersModule {}
