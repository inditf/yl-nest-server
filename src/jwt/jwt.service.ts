import { JwtService as NestJwtService } from '@nestjs/jwt';
import { Injectable, UnauthorizedException } from '@nestjs/common';
@Injectable()
export class JwtService {
    constructor(
        // 注入UsersService，所以需要import UsersModule
        // 底下的provider才能被注入
        private readonly NestJwtService: NestJwtService,
    ) { }

    async createToken(user) {
        const payload = { username: user.username, password: user.password };
        //在实际项目中一般要进行数据库验证查看用户用户名密码是否正确
        //const data = await this.userRepository.findOne({username:user.username, password: user.password})
        //if(!data) {
        // return {code: 1 , msg:'登录失败', data: ''}
        //}
        delete user.password;
        return {
            msg: '登录成功',
            data: {
                user: user,
                //得到token
                token: this.NestJwtService.sign(payload)
            },
        };
    }
}