import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserDatabaseService } from './user-database.service';
import { CreateUserDatabaseDto } from './dto/create-user-database.dto';
import { UpdateUserDatabaseDto } from './dto/update-user-database.dto';

import { UseGuards } from '@nestjs/common/decorators';
import { AuthGuard } from '@nestjs/passport';

@Controller('user-database')
export class UserDatabaseController {
  constructor(private readonly userDatabaseService: UserDatabaseService) { }

  @Post()
  create(@Body() createUserDatabaseDto: CreateUserDatabaseDto) {
    return this.userDatabaseService.create(createUserDatabaseDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  findAll() {
    return this.userDatabaseService.findAll();
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('/:username/:password')
  findOne(@Param('username') username: string, @Param('password') password: string): any {
    const data: any = this.userDatabaseService.findOne(username, password);
    return data;
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDatabaseDto: UpdateUserDatabaseDto) {
    return this.userDatabaseService.update(+id, updateUserDatabaseDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userDatabaseService.remove(+id);
  }
}
