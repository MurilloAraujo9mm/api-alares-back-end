import { IsNotEmpty, IsOptional, IsEmail } from 'class-validator';

export class UpdateUserDtoOrder {
  @IsOptional()
  @IsNotEmpty()
  first_name: string;

  @IsOptional()
  @IsNotEmpty()
  phone: string;

  @IsOptional()
  @IsNotEmpty()
  @IsEmail()
  email: string;
}
