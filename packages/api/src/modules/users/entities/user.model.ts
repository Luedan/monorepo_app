import { EntitySchema } from 'typeorm';
import { User } from './user.entity';

export const userModel = new EntitySchema<User>({
  name: 'users',
  columns: {
    idUser: {
      primary: true,
      type: 'int',
      generated: true,
    },
    email: {
      type: 'varchar',
    },
    idRole: {
      type: 'int',
    },
    password: {
      type: 'varchar',
    },
    type: {
      type: 'varchar',
    },
    createdAt: {
      type: 'timestamp',
      createDate: true,
    },
    updatedAt: {
      type: 'timestamp',
      updateDate: true,
    },
    deletedAt: {
      type: 'timestamp',
      nullable: true,
      deleteDate: true,
    },
  },
  relations: {
    role: {
      type: 'many-to-one',
      target: 'roles',
      joinColumn: { name: 'idRole' },
    },
  },
});
