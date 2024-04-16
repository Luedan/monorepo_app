import { Injectable } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { UserRepository } from '../users/user.repository';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class SecurityService {
  constructor(
    private readonly _userRepository: UserRepository,
    private readonly jwt: JwtService,
  ) {}

  async login(login: LoginDto) {
    const user = await this._userRepository.findUserById({
      where: { email: login?.email },
    });

    if (!user?.id) {
      return null;
    }

    const comparePassword = bcrypt.compareSync(login?.password, user?.password);

    if (!comparePassword) {
      return null;
    }

    const payload = { email: user?.email, id: user?.id, type: user?.type };

    return {
      access_token: this.jwt.sign(payload),
    };
  }

  async getTokenData(token: string) {
    return this.jwt.verify(token);
  }
}
