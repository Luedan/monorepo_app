import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { entities } from '../../libs/entities';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'ls-e7585ad1aaa52368ffc7adbd54cec344492ad9bd.czfp48fvire1.us-east-1.rds.amazonaws.com',
      port: 3306,
      username: 'dbmasteruser',
      password: 'xup4l0m4dur0',
      database: '360_dev',
      entities: [...entities],
      logging: true,
      synchronize: true,
    }),
  ],
})
@Global()
export class DatabaseModule {}
