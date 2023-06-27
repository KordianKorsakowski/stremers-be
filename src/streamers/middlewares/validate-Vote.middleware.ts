import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { isCorrectValueForVote } from 'src/utils/isCorrectValueForVote';
import { VoteType } from '../types/types';
import { BadReequest } from '../exceptions/BadRequest.exception';

@Injectable()
export class ValidateVoteMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const { vote } = req.query;
    if (isCorrectValueForVote(vote as VoteType)) {
      next();
    } else {
      throw new BadReequest()
    }
  }
}
