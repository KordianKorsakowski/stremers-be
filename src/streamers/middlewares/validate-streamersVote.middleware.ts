import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
// @Injectable()
// export class ValidateStreamersMiddleware implements NestMiddleware {
//   use(req: Request, res: Response, next: NextFunction) {
//     console.log('-----------------------------------middleware');
//     next();
//   }
// }

@Injectable()
export class ValidateStreamersVoteMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const { vote } = req.query;
    const { id } = req.params;
    if (vote === 'upvote' || vote === 'downvote') {
      next();
    } else {
      res.status(400).send({ error: 'Bad Request' });
    }
    console.log('-----------------------------------middleware');
  }
}
