import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { UsersModule } from './modules/users/users.module';
import { SecurityModule } from './modules/security/security.module';
import { GlobalModule } from './modules/global/global.module';
import { RolesModule } from './modules/roles/roles.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../', 'client/dist'),
    }),
    GlobalModule,
    UsersModule,
    SecurityModule,
    RolesModule,
  ],
})
export class AppModule {}
