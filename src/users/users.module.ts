import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './database/models/user.model';
import { UsersController } from './users.controller';
import { UserService } from './users.service';

@Module({
  imports: [SequelizeModule.forFeature([User])],
  controllers: [UsersController],
  providers: [UserService],
  exports: [UserService]
})
export class UsersModule {}
