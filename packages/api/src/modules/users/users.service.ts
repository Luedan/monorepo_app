import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersRepository } from './user.repository';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(private readonly _userRepository: UsersRepository) {}

  /**
   * Create a new user
   * @param createUserDto
   * @returns
   */
  async create(createUserDto: CreateUserDto): Promise<User> {
    const user = await this._userRepository.createUser(createUserDto);
    return user;
  }

  /**
   * Get all users
   * @returns
   */
  async findAll(): Promise<User[]> {
    const users = await this._userRepository.getAllUsers();
    return users;
  }

  /**
   * Get user by id
   * @param id
   * @returns
   */
  async findOne(id: number): Promise<User> {
    const user = await this._userRepository.findUserById({ where: { id } });
    return user;
  }

  /**
   * Update user
   * @param id
   * @param updateUserDto
   * @returns
   */
  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this._userRepository.updateUser(id, updateUserDto);
    return user;
  }

  /**
   * Remove user
   * @param id
   * @returns
   */
  async remove(id: number): Promise<User> {
    const data = await this._userRepository.deleteUser({ id });
    return data;
  }
}
