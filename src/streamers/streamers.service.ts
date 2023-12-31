import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { Streamers } from './streamers.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateStreamerDto } from './dtos/create-streamer.dto';
import { VoteType } from './types/types';
import { StreamerNotFound } from './exceptions/StreamerNotFound.exception';

@Injectable()
export class StreamersService {
  constructor(
    @InjectRepository(Streamers) private repo: Repository<Streamers>,
  ) {}
  create(body: CreateStreamerDto) {
    const streamer = this.repo.create(body);
    return this.repo.save(streamer);
  }
  async findOne(id: number) {
    return await this.repo.findOne({ where: { id } });
  }
  async getList() {
    const list = await this.repo.find();
    list.sort((a, b) => {
      return b.upvote - b.downvote - (a.upvote - a.downvote);
    });
    return list;
  }
  async update(id: number, vote: VoteType) {
    const streamer = await this.findOne(id);
    if (streamer) {
      if (vote === 'upvote') {
        Object.assign(streamer, { upvote: streamer.upvote + 1 });
      }
      if (vote === 'downvote') {
        Object.assign(streamer, { downvote: streamer.downvote + 1 });
      }
      return this.repo.save(streamer);
    }
  }
}
