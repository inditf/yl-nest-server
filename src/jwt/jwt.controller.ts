import { JwtService } from './jwt.service';
import { Controller, UseGuards, Get, Post, Req, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { Public } from 'src/public';
@Controller('')
export class JwtController {
    // JwtService: any;
    constructor(private readonly JwtService: JwtService) { }
    //使用jwt验证token的端口
    @Post('/tokenIn')
    aPost(@Req() req): any {
        return {
            statusCode: 200,
            message: 'Token验证成功',
            data: {
                user: req.user.username,
            },
        };
    }

    @Public()
    @Post('/getToken')
    getTokenByUserId(
        @Body() user: any,
    ) {
        return this.JwtService.createToken(user);
    }
}

