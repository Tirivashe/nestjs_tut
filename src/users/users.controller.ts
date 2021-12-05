import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, ParseIntPipe, Post, Put, Request, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';
import { User } from './database/models/user.model';
import { CreateUserDTO, UpdateUserDTO } from './user.dto';
import { UserService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UserService) {}

  @Get('')
  async getUsers(): Promise<User[]> {
    return await this.userService.getUsers()
  }

  @Get(':email')
  async getUserById(@Param('email') email: string): Promise<User> {
    const user = await this.userService.getUserByEmail(email)
    if(user) return user
    else throw new HttpException("User Not Found!!", HttpStatus.BAD_REQUEST)
  }

  //Just experimental but this is an approach you can totally take when sending status codes and potential exceptions
  @Post('/create')
  async createUser(@Body() body: CreateUserDTO): Promise<{status: typeof HttpStatus.CREATED, msg: string}>{
    const response = await this.userService.addUser(body)
    if(response){
      return {status: HttpStatus.CREATED, msg: "Created"}
    }else{
      throw new HttpException("User Creation Error", HttpStatus.BAD_REQUEST)
    }
  }

  @Put(':id')
  async updateUser(@Param('id', ParseIntPipe) id: number, @Body() body: UpdateUserDTO): Promise<void>{
    await this.userService.updateUser(id, body)
  }

  @Delete(':id')
  async deleteUserById(@Param('id', ParseIntPipe) id: number): Promise<void>{
    return await this.userService.deleteUserById(id)
  }


  //LOGIN IMPLEMENTATION
    @UseGuards(LocalAuthGuard)
    @Post('auth/login')
    async login(@Request() req: any){
      return req.user
    }
  
}
