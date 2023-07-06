import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserDatabaseService } from './user-database.service';
import { CreateUserDatabaseDto } from './dto/create-user-database.dto';
import { UpdateUserDatabaseDto } from './dto/update-user-database.dto';

@Controller('user-database')
export class UserDatabaseController {
  constructor(private readonly userDatabaseService: UserDatabaseService) { }

  @Post()
  create(@Body() createUserDatabaseDto: CreateUserDatabaseDto) {
    return this.userDatabaseService.create(createUserDatabaseDto);
  }

  @Get()
  findAll() {
    return this.userDatabaseService.findAll();
  }

  @Get(':username')
  findOne(@Param('username') username: string) {
    return this.userDatabaseService.findOne(username);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDatabaseDto: UpdateUserDatabaseDto) {
    return this.userDatabaseService.update(+id, updateUserDatabaseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userDatabaseService.remove(+id);
  }
}
