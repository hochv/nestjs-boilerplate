import { APP_FILTER } from '@nestjs/core';
import { AllExceptionsFilter } from './exceptions/exception.filter';
import { SharedModule } from './modules/shared/shared.module';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginModule } from '@/modules/login/login.module';
import { LoggerMiddleware } from './middlewares/logger.middleware';
import { LoginController } from './modules/login/login.controller';

@Module({
  imports: [SharedModule, LoginModule],
  controllers: [AppController],
  providers: [
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
    AppService,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes(LoginController);
  }
}
