import { IsString, IsEmail, IsDate, IsDateString } from 'class-validator';

export class CreateAuthDto {
  @IsString()
  username: string;

  @IsString()
  password: string;

  @IsEmail()
  email: string;

  @IsDateString()
  last_login: Date;

  @IsDate()
  createdAt: Date;

  @IsDate()
  updatedAt: Date;
}
