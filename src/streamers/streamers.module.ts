import { Module } from '@nestjs/common';
import { StreamersController } from './streamers.controller';
import { StreamersService } from './streamers.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Streamers } from './streamers.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Streamers])
  ],
  controllers: [StreamersController],
  providers: [StreamersService],
})
export class StreamersModule {}
