import { Module } from '@nestjs/common';
import { JwtService } from './jwt.service';
import { JwtController } from './jwt.controller';

import { JwtModule as NestJwtModule } from '@nestjs/jwt';
import { jwtKey } from '../config';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    NestJwtModule.registerAsync({
      useFactory: () => {
        return {
          secret: jwtKey.secret,//生成Token的Key
          signOptions: {
            expiresIn: '10m',//Token有效期
          }
        }
      }

    })],
  providers: [JwtService, JwtStrategy],//JwtStrategy是自定义的验证策略
  controllers: [JwtController]
})
export class JwtModule { }
