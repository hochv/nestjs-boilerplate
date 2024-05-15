import { SharedModule } from './modules/shared/shared.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginModule } from '@/modules/login/login.module';

@Module({
  imports: [SharedModule, LoginModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
