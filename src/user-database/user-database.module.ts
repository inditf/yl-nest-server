import { Module } from '@nestjs/common';
import { UserDatabaseService } from './user-database.service';
import { UserDatabaseController } from './user-database.controller';
//TypeOrm数据库
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserDatabase } from './entities/user-database.entity';
//全局使用jwt验证
import { APP_GUARD } from '@nestjs/core';
import { JwtGuard } from '../jwt/jwt.guard';
@Module({
  imports: [TypeOrmModule.forFeature([UserDatabase])],
  controllers: [UserDatabaseController],
  providers: [UserDatabaseService,
    {
      provide: APP_GUARD,
      useClass: JwtGuard,
    }],
  exports: [UserDatabaseService],
})
export class UserDatabaseModule { }
