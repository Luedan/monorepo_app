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
  documentNumber: string;

  @IsString()
  documentType: string;

  @IsDate()
  createdAt: Date;

  @IsDate()
  updatedAt: Date;

  @IsDate()
  deletedAt: Date;
}
