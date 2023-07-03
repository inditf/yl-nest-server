import { JwtService } from './jwt.service';
import { Controller, UseGuards, Get, Post, Req, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
@Controller('')
export class JwtController {
    // JwtService: any;
    constructor(private readonly JwtService: JwtService) { }
    //使用jwt验证token的端口
    @Post('/tokenIn')
    @UseGuards(AuthGuard('jwt'))
    aPost(@Req() req): any {
        return req.user.username;
    }

    @Post('/getToken')
    getTokenByUserId(
        @Body() user: any,
    ) {
        return this.JwtService.createToken(user);
    }
}

