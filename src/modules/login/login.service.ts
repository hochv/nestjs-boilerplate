import { Injectable } from '@nestjs/common';
import { LoginDTO } from './login.dto';

@Injectable()
export class LoginService {
  getTest(s: LoginDTO) {
    return s + 'hihihiihihih';
  }
}
