import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService, private readonly jwtService: JwtService){}

  async validate(email: string, pass: string): Promise<any>{
    const user =  await this.userService.getUserByEmail(email)
    if(user && user.password === pass){
      return user
    }

    return null
  }

  async login(user: any){
    const payload = { sub: user.dataValues.id, username: user.dataValues.id }

    return {
      access_token: this.jwtService.sign(payload)
    }
  }
}
