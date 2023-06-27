import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { isOnlyNumberInString } from 'src/utils/isOnlyNumberInString';
import { BadReequest } from '../exceptions/BadRequest.exception';

@Injectable()
export class ValidateIdMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    if (isOnlyNumberInString(id)) {
      next();
    } else {
      throw new BadReequest()
    }
  }
}
