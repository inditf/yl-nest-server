import { Injectable } from '@nestjs/common';
import { CreateUserDatabaseDto } from './dto/create-user-database.dto';
import { UpdateUserDatabaseDto } from './dto/update-user-database.dto';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserDatabase } from './entities/user-database.entity';
import { Like } from 'typeorm';

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
      this.userDatabaseRepository.save(createUserDatabaseDto);
      return {
        code: 200,
        data: {
          username: createUserDatabaseDto.username,
        },
        msg: '添加成功',
      };
    }
    catch (e) {
      console.log(e);
      return {
        code: 500,
        data: {
          username: createUserDatabaseDto.username,
        },
        msg: '添加失败',
      };
    }
  }

  async findAll() {
    return await this.userDatabaseRepository.find();
  }

  async findOne(username: string) {

    return await this.userDatabaseRepository.find({
      where: {
        username: Like(`%${username}%`),
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
        code: 200,
        data: {
          username: updateUserDatabaseDto.username,
        },
        msg: '更新成功',
      };
    }
    catch (e) {
      console.log(e);
      return {
        code: 500,
        data: {
          username: updateUserDatabaseDto.username,
        },
        msg: '更新失败',
      };
    }
  }

  async remove(id: number) {
    try {
      await this.userDatabaseRepository.delete(id);
      return {
        code: 200,
        data: {
          id: id,
        },
        msg: '删除成功',
      };
    }
    catch (e) {
      console.log(e);
      return {
        code: 500,
        data: {
          id: id,
        },
        msg: '删除失败',
      };
    }

  }
}
