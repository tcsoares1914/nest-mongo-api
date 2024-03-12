import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UserService } from '@src/user/user.service';
import { CreateUserDto } from '@src/user//dto/create-user.dto';

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
}
