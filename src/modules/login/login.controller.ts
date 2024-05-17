import { Controller, Get, Query, UsePipes } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginDto, loginRequestDto } from './login.dto';
import { RequestTypeValidate } from '@/pipes/zod.pipe';

@Controller('login')
export class LoginController {
  constructor(private loginService: LoginService) {}
  @Get()
  @UsePipes(new RequestTypeValidate(loginRequestDto))
  findAll(@Query() s: LoginDto): string {
    return this.loginService.getTest(s);
  }
}
