import { Controller, Get, Query } from '@nestjs/common';
import { LoginService } from './login.service';

@Controller('login')
export class LoginController {
  constructor(private loginService: LoginService) {}
  @Get()
  findAll(@Query('s') s: string): string {
    return this.loginService.getTest(s);
  }
}
