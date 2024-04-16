import { Module } from '@nestjs/common';
import { SecurityService } from './security.service';
import { SecurityController } from './security.controller';
import { JwtModule } from '@nestjs/jwt';
import { UserRepository } from '../users/user.repository';

@Module({
  imports: [
    JwtModule.register({
      secret: 'test-key',
      global: true,
      signOptions: {
        expiresIn: '30m',
      },
    }),
  ],
  controllers: [SecurityController],
  providers: [SecurityService, UserRepository],
})
export class SecurityModule {}
