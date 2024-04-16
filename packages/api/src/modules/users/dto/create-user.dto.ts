import {
  IsDate,
  IsEmail,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateUserDto {
  @IsNumber()
  @IsOptional()
  id?: number;

  @IsString()
  miliUid: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsString()
  documentNumber: string;

  @IsString()
  documentType: string;

  @IsNumber()
  type: number;

  @IsDate()
  createdAt: Date;

  @IsDate()
  updatedAt: Date;

  @IsDate()
  deletedAt: Date;
}
