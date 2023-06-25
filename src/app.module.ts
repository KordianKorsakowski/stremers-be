import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StreamersModule } from './streamers/streamers.module';
import { Streamers } from './streamers/streamers.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [Streamers],
      synchronize: true,
    }),
    StreamersModule
  ],
})
export class AppsModule {}
