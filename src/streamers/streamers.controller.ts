import {
  Controller,
  Get,
  Post,
  Put,
  Body,
  Param,
  Res,
  Query,
  HttpStatus,
} from '@nestjs/common';
import { CreateStreamerDto } from './dtos/create-streamer.dto';
import { StreamersService } from './streamers.service';
import { VoteType } from './types/types';
import { StreamerDto, StreamerFotListDto } from './dtos/streamer.dto';
import { Serialize } from 'src/interceptors/serialize.interceptors';
import { Response } from 'express';
import { StreamerNotFound } from './exceptions/StreamerNotFound.exception';
import { BadReequest } from './exceptions/BadRequest.exception';
@Controller('streamers')
export class StreamersController {
  constructor(private streamerService: StreamersService) {}
  @Post()
  async createStreamer(@Body() body: CreateStreamerDto, @Res() res: Response) {
    const streamer = await this.streamerService.create(body);
    if (streamer) {
      res.send({
        statusCode: HttpStatus.CREATED,
        message: 'success',
        data: streamer,
      });
    } else {
      throw new BadReequest();
    }
  }
  @Serialize(StreamerFotListDto)
  @Get()
  async getlistStreamers(@Res() res: Response) {
    const list = await this.streamerService.getList();
    if (list) {
      res.send({
        statusCode: HttpStatus.FOUND,
        message: 'success',
        data: list,
      });
    } else {
      throw new BadReequest();
    }
  }
  @Serialize(StreamerDto)
  @Get('/:id')
  async getStreamer(@Param('id') id: string, @Res() res: Response) {
    const streamer = await this.streamerService.findOne(Number(id));
    if (streamer) {
      res.send({
        statusCode: HttpStatus.FOUND,
        message: 'success',
        data: streamer,
      });
    } else {
      throw new StreamerNotFound();
    }
  }
  @Put('/:id')
  async voteStreamer(
    @Param('id') id: string,
    @Query('vote') vote: VoteType,
    @Res() res: Response,
  ) {
    const streamerUpdate = await this.streamerService.update(Number(id), vote);
    if (streamerUpdate) {
      res.send({
        statusCode: HttpStatus.OK,
        message: 'success',
      });
    } else {
      throw new StreamerNotFound();
    }
  }
}
