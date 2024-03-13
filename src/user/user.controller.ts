import {
  Controller,
  Delete,
  Get,
  Post,
  Body,
  Param,
  Patch,
} from '@nestjs/common';
import { UserService } from '@src/user/user.service';
import { CreateUserDto } from '@src/user//dto/create-user.dto';
import { UpdateUserDto } from '@src/user/dto/update-user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  /**
   * Create a new user into collection.
   */
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  /**
   * Get all users from collection.
   */
  @Get()
  findAll() {
    return this.userService.findAll();
  }

  /**
   * Find one user from collection.
   */
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  /**
   * Update one user from collection.
   */
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }

  /**
   * Delete one user from collection.
   */
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.userService.delete(id);
  }
}
