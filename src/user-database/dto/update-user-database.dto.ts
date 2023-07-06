import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDatabaseDto } from './create-user-database.dto';

export class UpdateUserDatabaseDto extends PartialType(CreateUserDatabaseDto) {
    username: string;
    password: string;
    // create_time: Date;
}
