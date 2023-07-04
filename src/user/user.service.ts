import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entities';
// import { lookupService } from 'dns';
import { Like } from 'typeorm';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) { }
    // getUser(): any {
    //     return {
    //         code: 200,
    //         data: {
    //             username: "admin",
    //             password: "123456",
    //         },
    //         msg: '获取成功',
    //     };
    // }
    // getUserById(id: number): any {
    //     let reJson: any = {
    //         code: 200,
    //         data: {
    //             id: id,
    //             username: "admin",
    //         },
    //         msg: '获取成功',

    //     };
    //     return reJson;
    // }
    // getUserByIdName(id: number, name: string): any {
    //     let reJson: any = {
    //         code: 200,
    //         data: {
    //             id: id,
    //             username: name,
    //         },
    //         msg: '获取成功',

    //     };
    //     return reJson;
    // }


    // addUser(): any {
    //     return {
    //         code: 200,
    //         data: {
    //             username: "test",
    //             password: "123456",
    //         },
    //         msg: '添加成功',
    //     };
    // }
    // addUserByPost(username: string, password: string): any {
    //     return {
    //         code: 200,
    //         data: {
    //             username: username,
    //             password: password,
    //         },
    //         msg: '添加成功',
    //     };
    // }

    //CURD database

    //增加
    addUserDatabase(username: string, password: string): any {
        const data: User = new User();
        data.username = username;
        data.password = password;
        data.create_time = new Date();
        return this.userRepository.save(data);
    }
    //删除
    delUserDatabase(id: number): any {
        return this.userRepository.delete(id);
    }
    //修改
    updateUserDatabase(id: number, username: string): any {
        const data: User = new User();
        data.username = username;
        // data.password = "123456";
        return this.userRepository.update(id, data);
    }
    //查询
    getUsersDatabase(): any {
        return this.userRepository.find();
    }
    getUserByIdDatabase(username: string): any {
        return this.userRepository.find({
            where: {
                username: Like(`%${username}%`)
            }
        });
    }
}
