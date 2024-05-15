import { Module } from '@nestjs/common';
import { LoginService } from '../login/login.service';

@Module({
  providers: [LoginService],
  exports: [LoginService],
})
export class SharedModule {}
