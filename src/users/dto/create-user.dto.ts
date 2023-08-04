import { IsNotEmpty, IsEmail, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateUserDto {
  
  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  @MaxLength(50)
  first_name: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(10)
  @MaxLength(15) 
  phone: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;
}
