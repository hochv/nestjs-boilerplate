/*
https://docs.nestjs.com/middleware#middleware
*/

import { checkHasProperties } from '@/utils';
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: Function) {
    console.log('path', req.path);
    if (checkHasProperties(req.body)) {
      console.log('body', req.body);
    }
    if (checkHasProperties(req.params)) {
      console.log('params', req.params);
    }
    if (checkHasProperties(req.query)) {
      console.log('queries', req.query);
    }
    next();
  }
}
