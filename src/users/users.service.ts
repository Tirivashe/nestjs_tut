import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './database/models/user.model';
import { CreateUserDTO, UpdateUserDTO } from './user.dto';


@Injectable()
export class UserService {
  constructor(@InjectModel(User) private readonly UserModel: typeof User ){}

  async getUsers(): Promise<User[]>{
    return await this.UserModel.findAll()
  }

  async getUserByEmail(email: string): Promise<User>{
    return await this.UserModel.findOne({ where: { email } })
  }

  async addUser(body: CreateUserDTO): Promise<string>{
    await this.UserModel.create(body)
    return "User Successfully Created"
  }

  async deleteUserById(id: number): Promise<void>{
    const user = await this.UserModel.findOne({ where: { id } })
    await user.destroy()
  }

  async updateUser(id: number, body: UpdateUserDTO): Promise<void> {
    await this.UserModel.update(body, { where: { id }})
  }

}
