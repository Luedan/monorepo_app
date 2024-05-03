import { HttpException, Inject, Injectable, Scope } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';
import {
  DataSource,
  FindManyOptions,
  FindOneOptions,
  FindOptionsWhere,
  Repository,
  SaveOptions,
} from 'typeorm';
import { Role } from '../roles/entities/role.entity';
import { BaseRepository } from '@app/common/classes/baseRepository';
import { RoleModel } from './entities/role.model';

@Injectable({ scope: Scope.REQUEST })
export class RoleRepository extends BaseRepository {
  /**
   * Role repository
   */
  _userRepository: Repository<Role>;

  /**
   * Constructor
   * @param dataSource
   * @param req
   */
  constructor(dataSource: DataSource, @Inject(REQUEST) req: Request) {
    super(dataSource, req);

    this._userRepository = this.getRepository(RoleModel);
  }

  /**
   * Create a new role
   * @param options Role options
   * @returns Role
   */
  async getAllRoles(options?: FindManyOptions<Role>): Promise<Role[]> {
    try {
      return await this._userRepository.find(options);
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message || ''}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Create a new role
   * @param options Role options
   * @returns Role
   */
  async createRole(role: Role): Promise<Role> {
    try {
      const userData = await this._userRepository.insert(role);
      return { ...role, ...userData?.raw[0], ...userData?.generatedMaps[0] };
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message || ''}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Find role by id
   * @param id Role id
   * @returns Role
   */
  async findRoleById(options: FindOneOptions<Role>): Promise<Role> {
    try {
      return await this._userRepository.findOne(options);
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message || ''}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Delete role
   * @param criteria Role id
   * @returns Role
   */
  async updateRole(
    criteria: string | number | FindOptionsWhere<Role>,
    role: Partial<Role>,
  ): Promise<Role> {
    try {
      const updateRole = await this._userRepository.update(criteria, role);
      return {
        ...role,
        ...updateRole?.raw[0],
        ...updateRole?.generatedMaps[0],
      };
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message || ''}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Delete role
   * @param criteria Role id
   * @returns Role
   */
  async deleteRole(criteria: FindOptionsWhere<Role>): Promise<Role> {
    try {
      const role = await this.findRoleById({ where: criteria });
      const deleteRole = await this._userRepository.delete(criteria);
      return { ...role, ...deleteRole?.raw[0] };
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message || ''}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Save role
   * @param role Role
   * @param options Save options
   * @returns
   */
  async saveRole(role: Role, options?: SaveOptions): Promise<Role> {
    try {
      const userSaved = await this._userRepository.save(role, options);
      return userSaved;
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message || ''}`,
        error?.status || 500,
      );
    }
  }
}
