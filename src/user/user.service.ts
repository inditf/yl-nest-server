import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    getUser(): any {
        return {
            code: 200,
            data: {
                username: "admin",
                password: "123456",
            },
            msg: '获取成功',
        };
    }
    getUserById(id: number): any {
        let reJson: any = {
            code: 200,
            data: {
                id: id,
                username: "admin",
            },
            msg: '获取成功',

        };
        return reJson;
    }
    getUserByIdName(id: number, name: string): any {
        let reJson: any = {
            code: 200,
            data: {
                id: id,
                username: name,
            },
            msg: '获取成功',

        };
        return reJson;
    }


    addUser(): any {
        return {
            code: 200,
            data: {
                username: "test",
                password: "123456",
            },
            msg: '添加成功',
        };
    }
    addUserByPost(username: string, password: string): any {
        return {
            code: 200,
            data: {
                username: username,
                password: password,
            },
            msg: '添加成功',
        };
    }

}
