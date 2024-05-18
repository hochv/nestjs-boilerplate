import { ApiProperty } from '@nestjs/swagger';

export class LoginDTO {
  @ApiProperty()
  name: string;

  @ApiProperty()
  age: number;

  @ApiProperty()
  breed: string;
}
