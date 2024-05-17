import { Reflector } from '@nestjs/core';

export const IgnoreAuthGuard = Reflector.createDecorator<any>();
