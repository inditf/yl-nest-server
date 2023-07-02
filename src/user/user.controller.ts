import { Controller, Get, Post, Request, Query, Body, Param, Headers } from '@nestjs/common';
import { UserService } from './user.service';
@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }
    //get user
    @Get()
    getUser(): any {
        return this.userService.getUser();
    }
    @Get('/getUserById')
    getUserByIdParams(@Request() req): any {
        let id: number = req.query.id;
        return this.userService.getUserById(id);
    }
    @Get('/getUserByQueryId')
    getUserByQueryId(@Query() query): any {
        let id: number = query.id;
        return this.userService.getUserById(id);
    }
    @Get('/getUserByQueryId/:id')
    getUserById(@Request() req): any {
        let id: number = req.params.id;
        return this.userService.getUserById(id);
    }
    //get id&username
    @Get('/getUserByIdName/:id/:name')
    getUserByIdName(@Param() params): any {
        let id: number = params.id;
        let name: string = params.name;
        return this.userService.getUserByIdName(id, name);
    }
    //get header
    @Get('/getHeader')
    getHeader(@Headers() headers): any {
        return headers;
    }




    //add user
    @Post()
    addUser(): any {
        return this.userService.addUser();
    }

    @Post('/addUser')
    addUserByPost(@Body() body): any {
        let username: string = body.username;
        let password: string = body.password;
        return this.userService.addUserByPost(username, password);

    }


}
