import { Controller, Get, Query } from '@nestjs/common';
import { LoginService } from './login.service';
import { IgnoreAuthGuard } from '@/decorators/ignoreAuthGuard.decorator';
import { LoginDTO } from './login.dto';

@Controller('login')
export class LoginController {
  constructor(private loginService: LoginService) {}
  @Get()
  @IgnoreAuthGuard()
  findAll(@Query() s: LoginDTO): string {
    return this.loginService.getTest(s);
  }
}
