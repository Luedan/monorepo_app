import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { entities } from '../../libs/entities';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '',
      port: 3306,
      username: '',
      password: '',
      database: '360_dev',
      entities: [...entities],
      logging: true,
      synchronize: true,
    }),
  ],
})
@Global()
export class DatabaseModule {}
