import { Module } from '@nestjs/common';
import { UserDatabaseService } from './user-database.service';
import { UserDatabaseController } from './user-database.controller';

import { TypeOrmModule } from '@nestjs/typeorm';
import { UserDatabase } from './entities/user-database.entity';
@Module({
  imports: [TypeOrmModule.forFeature([UserDatabase])],
  controllers: [UserDatabaseController],
  providers: [UserDatabaseService],
  exports: [UserDatabaseService],
})
export class UserDatabaseModule { }
