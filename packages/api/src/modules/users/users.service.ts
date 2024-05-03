import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UserRepository } from '../users/users.repository';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private readonly _userRepository: UserRepository) {}

  /**
   * Create a new user
   * @param createUserDto
   * @returns
   */
  async create(createUserDto: CreateUserDto): Promise<User> {
    const passwordCrypt = bcrypt.hashSync(createUserDto.password, 10);

    const user = await this._userRepository.createUser({
      ...createUserDto,
      password: passwordCrypt,
    });

    return user;
  }

  /**
   * Get all users
   * @returns
   */
  async findAll(): Promise<User[]> {
    const users = await this._userRepository.getAllUsers({
      relations: { role: true },
    });
    return users;
  }

  /**
   * Get user by id
   * @param id
   * @returns
   */
  async findOne(id: number): Promise<User> {
    const user = await this._userRepository.findUserById({
      where: { idUser: id },
    });
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
    const data = await this._userRepository.deleteUser({ idUser: id });
    return data;
  }
}
