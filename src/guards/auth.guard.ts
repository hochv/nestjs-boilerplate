import { IgnoreAuthGuard } from '@/decorators/ignoreAuthGuard.decorator';
import { verifyAccessToken } from '@/utils';
import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private reflector: Reflector) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const isIgnoreGuard = this.reflector.get(
      IgnoreAuthGuard,
      context.getHandler(),
    );
    if (isIgnoreGuard) return true;
    const req = context.switchToHttp().getRequest();
    const res = context.switchToHttp().getResponse();
    const token = req?.cookies?.accessToken;
    if (!token) {
      throw new UnauthorizedException('token is missing');
    }
    try {
      const decoded = verifyAccessToken(token);
      res.decodedToken = decoded;
      return true;
    } catch (err) {
      throw new UnauthorizedException('Token is invalid');
    }
  }
}
