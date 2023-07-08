import { Inject } from '@nestjs/common/decorators';
import { JwtService as NestJwtService } from '@nestjs/jwt';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserDatabaseService } from '../user-database/user-database.service';
@Injectable()
export class JwtService {
    constructor(
        // 注入UsersService，所以需要import UsersModule
        // 底下的provider才能被注入
        private readonly userDatabaseService: UserDatabaseService,
        private readonly nestJwtService: NestJwtService,
        // @Inject('UserDatabaseService') 
    ) { }

    async createToken(user) {
        const payload = { username: user.username, password: user.password };
        //在实际项目中一般要进行数据库验证查看用户用户名密码是否正确
        const data: any = await this.userDatabaseService.findOne(user.username, user.password);
        if (data.length == 0) {
            return {
                statusCode: 500,
                message: '用户或密码错误',
                data: ''
            };
        }
        delete user.password;
        return {
            statusCode: 200,
            message: '登录成功',
            data: {
                user: data,
                //得到token
                token: this.nestJwtService.sign(payload)
            },
        };
    }
}