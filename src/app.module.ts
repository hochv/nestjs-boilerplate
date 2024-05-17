import { APP_FILTER, APP_GUARD } from '@nestjs/core';
import { AllExceptionsFilter } from './exceptions/exception.filter';
import { SharedModule } from './modules/shared/shared.module';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginModule } from '@/modules/login/login.module';
import { LoggerMiddleware } from './middlewares/logger.middleware';
import { LoginController } from './modules/login/login.controller';
import { ConfigModule } from '@nestjs/config';
import { AuthGuard } from './guards/auth.guard';

@Module({
  imports: [SharedModule, LoginModule, ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    AppService,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes(LoginController);
  }
}
