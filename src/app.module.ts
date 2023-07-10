import { Module } from '@nestjs/common';
import { JwtModule } from './jwt/jwt.module';

import { sqlConfig } from './config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserDatabaseModule } from './user-database/user-database.module';
@Module({
  imports: [
    TypeOrmModule.forRoot(sqlConfig),
    JwtModule,
    UserDatabaseModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
