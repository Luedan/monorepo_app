import { Module } from '@nestjs/common';
import { TypeIdentitiesService } from './type-identities.service';
import { TypeIdentitiesController } from './type-identities.controller';

@Module({
  controllers: [TypeIdentitiesController],
  providers: [TypeIdentitiesService],
})
export class TypeIdentitiesModule {}
