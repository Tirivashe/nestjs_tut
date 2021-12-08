import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/users/users.module';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { LocalStrategy } from './local.strategy';

@Module({
  imports: [UsersModule, 
    PassportModule, 
    JwtModule.register({
      secret: "SECRET",
      signOptions: { expiresIn: '3600s' }
    })
  ], //import the whole UserModule so that it and all the other contexts used in that module can be forwarded
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService]
})
export class AuthModule {}
