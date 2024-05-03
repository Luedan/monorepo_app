import { EntitySchema } from 'typeorm';
import { Role } from './role.entity';

export const RoleModel = new EntitySchema<Role>({
  name: 'roles',
  columns: {
    idRole: {
      primary: true,
      type: 'int',
      generated: true,
    },
    name: {
      type: 'varchar',
    },
  },
  relations: {
    users: {
      type: 'one-to-many',
      target: 'users',
      inverseSide: 'users',
      cascade: true,
    },
  },
});
