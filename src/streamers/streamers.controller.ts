import { Controller, Get, Post, Put, Body, Param, Query } from '@nestjs/common';
import { CreateStreamerDto } from './dtos/create-streamer.dto';
import { StreamersService } from './streamers.service';
import { VoteType } from './types/types';
import { StreamerDto, StreamerFotListDto } from './dtos/streamer.dto';
import { Serialize } from 'src/interceptors/serialize.interceptors';

@Controller('streamers')
export class StreamersController {
  constructor(private streamerService: StreamersService) {}
  @Post()
  createStreamer(@Body() body: CreateStreamerDto) {
    console.log(body);
    this.streamerService.create(body);
  }
  @Serialize(StreamerFotListDto)
  @Get()
  async getlistStreamers() {
    const list = await this.streamerService.getList();
    console.log('list', list);
    return list;
  }
  @Serialize(StreamerDto)
  @Get('/:id')
  async getStreamer(@Param('id') id: string) {
    const streamer = await this.streamerService.findOne(Number(id));
    console.log(streamer);
    return streamer;
  }
  @Put('/:id')
  voteStreamer(@Param('id') id: string, @Query('vote') vote: VoteType) {
    console.log(id, vote);
    this.streamerService.update(Number(id), vote);
    return 'success';
  }
}
