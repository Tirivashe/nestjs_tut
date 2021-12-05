import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { config } from './users/database/config';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule, SequelizeModule.forRoot(config)]
})
export class AppModule {}
