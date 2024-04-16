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
import { User } from './entities/user.entity';
import { BaseRepository } from '@app/common/classes/baseRepository';

@Injectable({ scope: Scope.REQUEST })
export class UserRepository extends BaseRepository {
  /**
   * User repository
   */
  _userRepository: Repository<User>;

  /**
   * Constructor
   * @param dataSource
   * @param req
   */
  constructor(dataSource: DataSource, @Inject(REQUEST) req: Request) {
    super(dataSource, req);

    this._userRepository = this.getRepository(User);
  }

  /**
   * Create a new user
   * @param options User options
   * @returns User
   */
  async getAllUsers(options?: FindManyOptions<User>): Promise<User[]> {
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
   * Create a new user
   * @param options User options
   * @returns User
   */
  async createUser(user: User): Promise<User> {
    try {
      const userData = await this._userRepository.insert(user);
      return { ...user, ...userData?.raw[0], ...userData?.generatedMaps[0] };
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message || ''}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Find user by id
   * @param id User id
   * @returns User
   */
  async findUserById(options: FindOneOptions<User>): Promise<User> {
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
   * Delete user
   * @param criteria User id
   * @returns User
   */
  async updateUser(
    criteria: string | number | FindOptionsWhere<User>,
    user: Partial<User>,
  ): Promise<User> {
    try {
      const updateUser = await this._userRepository.update(criteria, user);
      return {
        ...user,
        ...updateUser?.raw[0],
        ...updateUser?.generatedMaps[0],
      };
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message || ''}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Delete user
   * @param criteria User id
   * @returns User
   */
  async deleteUser(criteria: FindOptionsWhere<User>): Promise<User> {
    try {
      const user = await this.findUserById({ where: criteria });
      const deleteUser = await this._userRepository.delete(criteria);
      return { ...user, ...deleteUser?.raw[0] };
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message || ''}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Save user
   * @param user User
   * @param options Save options
   * @returns
   */
  async saveUser(user: User, options?: SaveOptions): Promise<User> {
    try {
      const userSaved = await this._userRepository.save(user, options);
      return userSaved;
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message || ''}`,
        error?.status || 500,
      );
    }
  }
}
