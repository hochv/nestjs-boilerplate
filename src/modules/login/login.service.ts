import { Injectable } from '@nestjs/common';

@Injectable()
export class LoginService {
  getTest(s: string) {
    return s + 'hihihiihihih';
  }
}
