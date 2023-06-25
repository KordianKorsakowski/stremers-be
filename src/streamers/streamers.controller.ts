import { Controller, Get, Post, Put, Body, Param, Query } from '@nestjs/common';

@Controller('streamers')
export class StreamersController {
  @Post()
  createStreamer(@Body() body: any) {
    console.log(body);
  }
  @Get()
  listStreamers() {
    console.log('list');
  }
  @Get('/:id')
  getStreamer(@Param('id') id: string) {
    console.log(id);
  }
  @Put('/:id')
  voteStreamer(
    @Param('id') id: string,
    @Query('vote') vote: 'upvote' | 'downvote',
  ) {
    console.log(id);
    console.log(vote);
  }
}
