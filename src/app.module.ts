import { Module } from '@nestjs/common';
import { JwtModule } from './jwt/jwt.module';

import { TypeOrmModule } from '@nestjs/typeorm';
import { UserDatabaseModule } from './user-database/user-database.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: "admin",
      password: "admin123",
      database: 'nest-user',
      retryAttempts: 10,//重试次数
      retryDelay: 500,//重试延迟
      synchronize: true,//自动同步数据库表结构
      autoLoadEntities: true,//自动加载实体
    }),
    JwtModule,
    UserDatabaseModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
