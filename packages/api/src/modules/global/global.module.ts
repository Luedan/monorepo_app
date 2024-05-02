import { Global, Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { AutomapperModule } from '@automapper/nestjs';
import { classes } from '@automapper/classes';

const GLOBAL_PROVIDERS = [];

@Global()
@Module({
  imports: [
    DatabaseModule,
    AutomapperModule.forRoot({
      strategyInitializer: classes(),
    }),
  ],
  providers: [...GLOBAL_PROVIDERS],
  exports: [...GLOBAL_PROVIDERS],
})
export class GlobalModule {}
