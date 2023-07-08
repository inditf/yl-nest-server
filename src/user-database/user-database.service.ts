import { Injectable } from '@nestjs/common';
import { CreateUserDatabaseDto } from './dto/create-user-database.dto';
import { UpdateUserDatabaseDto } from './dto/update-user-database.dto';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserDatabase } from './entities/user-database.entity';
import { Like } from 'typeorm';

// export type User = {
//   username: string,
//   password: string,
// };

@Injectable()
export class UserDatabaseService {
  constructor(
    @InjectRepository(UserDatabase)
    private userDatabaseRepository: Repository<UserDatabase>,
  ) { }

  async create(createUserDatabaseDto: CreateUserDatabaseDto) {
    const data: UserDatabase = new UserDatabase();
    data.username = createUserDatabaseDto.username;
    data.password = createUserDatabaseDto.password;
    data.create_time = new Date();
    try {
      await this.userDatabaseRepository.save(createUserDatabaseDto);
      return {
        statusCode: 200,
        data: {
          username: createUserDatabaseDto.username,
        },
        message: '添加成功',
      };
    }
    catch (e) {
      console.log(e);
      return {
        statusCode: 500,
        data: {
          username: createUserDatabaseDto.username,
        },
        message: '添加失败',
      };
    }
  }

  async findAll() {

    const data = await this.userDatabaseRepository.find();
    return {
      statusCode: 200,
      data: data,
      message: '查询成功',
    };
  }

  async findOne(username: string, password: string) {

    return await this.userDatabaseRepository.find({
      where: {
        username: username,
        password: password,
      }
    });

  }

  async update(id: number, updateUserDatabaseDto: UpdateUserDatabaseDto) {
    const data: UserDatabase = new UserDatabase();
    data.username = updateUserDatabaseDto.username;
    data.password = updateUserDatabaseDto.password;
    try {
      await this.userDatabaseRepository.update(id, data);
      return {
        statusCode: 200,
        data: {
          username: updateUserDatabaseDto.username,
        },
        message: '更新成功',
      };
    }
    catch (e) {
      console.log(e);
      return {
        statusCode: 500,
        data: {
          username: updateUserDatabaseDto.username,
        },
        message: '更新失败',
      };
    }
  }

  async remove(id: number) {
    try {
      await this.userDatabaseRepository.delete(id);
      return {
        statusCode: 200,
        data: {
          id: id,
        },
        message: '删除成功',
      };
    }
    catch (e) {
      console.log(e);
      return {
        statusCode: 500,
        data: {
          id: id,
        },
        message: '删除失败',
      };
    }

  }
}
