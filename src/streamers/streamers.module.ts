import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { StreamersController } from './streamers.controller';
import { StreamersService } from './streamers.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Streamers } from './streamers.entity';
import { ValidateStreamersVoteMiddleware } from './middlewares/validate-streamersVote.middleware';

@Module({
  imports: [TypeOrmModule.forFeature([Streamers])],
  controllers: [StreamersController],
  providers: [StreamersService],
})
export class StreamersModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(ValidateStreamersVoteMiddleware)
      .forRoutes({ path: 'streamers/:id', method: RequestMethod.PUT });
  }
}
