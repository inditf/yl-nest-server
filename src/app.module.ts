import { Module } from '@nestjs/common';
import { JwtModule } from './jwt/jwt.module';
//TypeOrm数据库
import { sqlConfig } from './config';
import { TypeOrmModule } from '@nestjs/typeorm';
//全局使用jwt验证
import { APP_GUARD } from '@nestjs/core';
import { JwtGuard } from './jwt/jwt.guard';
//
import { UserDatabaseModule } from './user-database/user-database.module';
import { UploadModule } from './upload/upload.module';
@Module({
  imports: [
    TypeOrmModule.forRoot(sqlConfig),
    JwtModule,
    UserDatabaseModule,
    UploadModule
  ],
  controllers: [],
  providers: [{
    provide: APP_GUARD,
    useClass: JwtGuard,
  }],
})
export class AppModule { }
