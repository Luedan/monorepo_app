import { Role } from '@app/modules/roles/entities/role.entity';

export class User {
  /**
   * User id
   */
  idUser?: number;

  /**
   * Email
   */
  email: string;

  /**
   * Password
   */
  password: string;

  /**
   * User type
   */
  type: number;

  /**
   * Role id
   */
  idRole: number;

  /**
   * Create date
   */
  createdAt?: Date;

  /**
   * Update date
   */
  updatedAt?: Date;

  /**
   * Delete date
   */
  deletedAt?: Date;

  /** Relations */
  role?: Role;
}
