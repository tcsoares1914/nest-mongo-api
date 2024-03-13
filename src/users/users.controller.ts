import {
  Controller,
  Delete,
  Get,
  Post,
  Body,
  Param,
  Patch,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@src/auth/auth.guard';
import { UsersService } from '@src/users/users.service';
import { CreateUserDto } from '@src/users/dto/create-user.dto';
import { UpdateUserDto } from '@src/users/dto/update-user.dto';

@Controller('users')
export class UsersController {
  /**
   * Create a new instance for UserService.
   */
  constructor(private readonly usersService: UsersService) {}

  /**
   * Create a new user into collection.
   */
  @UseGuards(AuthGuard)
  @Post()
  public create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  /**
   * Get all users from collection.
   */
  @UseGuards(AuthGuard)
  @Get()
  public findAll() {
    return this.usersService.findAll();
  }

  /**
   * Find one user from collection.
   */
  @UseGuards(AuthGuard)
  @Get(':id')
  public findOne(@Param('id') id: string) {
    return this.usersService.findOneById(id);
  }

  /**
   * Update one user from collection.
   */
  @UseGuards(AuthGuard)
  @Patch(':id')
  public update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  /**
   * Delete one user from collection.
   */
  @UseGuards(AuthGuard)
  @Delete(':id')
  public delete(@Param('id') id: string) {
    return this.usersService.delete(id);
  }
}
