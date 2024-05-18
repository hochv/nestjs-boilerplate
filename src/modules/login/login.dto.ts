import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString } from 'class-validator';

export class LoginDTO {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsInt()
  age: number;

  @ApiProperty()
  @IsString()
  breed: string;
}
