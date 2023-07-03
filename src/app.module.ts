import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { JwtModule } from './jwt/jwt.module';

@Module({
  imports: [UserModule, JwtModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
