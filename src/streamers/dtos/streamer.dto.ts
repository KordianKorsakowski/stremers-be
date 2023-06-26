import { Expose } from 'class-transformer';
export class StreamerDto {
  @Expose()
  id: number;
  @Expose()
  email: string;
  @Expose()
  platfromType: string;
  @Expose()
  description: string;
  @Expose()
  upvote: number;
  @Expose()
  downvote: number;
  @Expose()
  urlImg: string;
}

export class StreamerFotListDto {
    @Expose()
    id: number;
    @Expose()
    email: string;
    @Expose()
    platfromType: string;
    @Expose()
    description: string;
    @Expose()
    upvote: number;
    @Expose()
    downvote: number;
  }