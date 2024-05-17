import { Injectable } from '@nestjs/common';
import { LoginDto } from './login.dto';

@Injectable()
export class LoginService {
  getTest(s: LoginDto) {
    return s + 'hihihiihihih';
  }
}
