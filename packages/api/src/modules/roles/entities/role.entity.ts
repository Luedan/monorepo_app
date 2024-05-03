import { User } from '@app/modules/users/entities/user.entity';

export class Role {
  /**
   * Role id
   */
  idRole: number;

  /**
   * Role name
   */
  name: string;

  /**
   * Users
   */
  users?: User[];
}
