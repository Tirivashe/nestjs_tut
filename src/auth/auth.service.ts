import { Injectable } from '@nestjs/common';
import { UserService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService){}

  async validate(email: string, givenPassword: string): Promise<any>{
    const user = await this.userService.getUserByEmail(email)
    const { password, ...rest } = user
    return user.password === givenPassword ? rest : null
  }
}
