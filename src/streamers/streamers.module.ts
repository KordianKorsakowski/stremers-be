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
import { ValidateVoteMiddleware } from './middlewares/validate-Vote.middleware';
import { ValidateIdMiddleware } from './middlewares/validate-Id.middleware';

@Module({
  imports: [TypeOrmModule.forFeature([Streamers])],
  controllers: [StreamersController],
  providers: [StreamersService],
})
export class StreamersModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(ValidateVoteMiddleware, ValidateIdMiddleware)
      .forRoutes({ path: 'streamers/:id', method: RequestMethod.PUT })
      .apply(ValidateIdMiddleware)
      .forRoutes({ path: 'streamers/:id', method: RequestMethod.GET });
  }
}
