import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { DatabaseModule } from './modules/database/database.module';
import { UsersModule } from './modules/users/users.module';
import { SecurityModule } from './modules/security/security.module';
import { TypeIdentitiesModule } from './modules/type-identities/type-identities.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../', 'client/dist'),
    }),
    DatabaseModule,
    UsersModule,
    SecurityModule,
    TypeIdentitiesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
