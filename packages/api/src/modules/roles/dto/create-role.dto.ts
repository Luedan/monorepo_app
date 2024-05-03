import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateRoleDto {
  /**
   * Role id
   */
  @IsNumber()
  @IsOptional()
  idRole: number;

  /**
   * Role name
   */
  @IsString()
  name: string;
}
