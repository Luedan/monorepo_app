import { IsEmail, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateUserDto {
  @IsNumber()
  @IsOptional()
  idUser?: number;

  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsNumber()
  type: number;

  @IsNumber()
  idRole: number;
}
