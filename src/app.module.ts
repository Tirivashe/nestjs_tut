import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { config } from './users/database/config';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule, AuthModule, SequelizeModule.forRoot(config)], //when importing, you import entire modules
  controllers: [AppController]
})
export class AppModule {}
