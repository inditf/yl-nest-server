import { Module } from '@nestjs/common';
import { JwtService } from './jwt.service';
import { JwtController } from './jwt.controller';

import { JwtModule as NestJwtModule } from '@nestjs/jwt';
import { jwtKey } from '../config';
import { JwtStrategy } from './jwt.strategy';

import { UserDatabaseModule } from 'src/user-database/user-database.module';
//全局使用jwt验证
import { APP_GUARD } from '@nestjs/core';
import { JwtGuard } from '../jwt/jwt.guard';
@Module({
  imports: [
    UserDatabaseModule,
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
  providers: [
    JwtService,
    JwtStrategy,//JwtStrategy是自定义的验证策略
    {
      provide: APP_GUARD,
      useClass: JwtGuard,
    }],
  controllers: [JwtController]
})
export class JwtModule { }
