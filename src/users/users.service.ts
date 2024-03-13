import {
  Injectable,
  BadRequestException,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
import { Users } from '@src/users/schemas/users.schema';
import { CreateUserDto } from '@src/users/dto/create-user.dto';
import { UpdateUserDto } from '@src/users/dto/update-user.dto';

@Injectable()
export class UsersService {
  /**
   * Salt rounds to encrypt password.
   */
  saltOrRounds: number = 10;

  /**
   * Create a new instance for Model.
   */
  constructor(@InjectModel(Users.name) private userModel: Model<Users>) {}

  /**
   * Create a new user into collection.
   */
  public async create(createUserDto: CreateUserDto): Promise<Users> {
    const user = await this.findOneByEmail(createUserDto.email);

    if (user) {
      throw new BadRequestException('Email for user is already registerd!');
    }

    createUserDto.password = await bcrypt.hash(
      createUserDto.password,
      this.saltOrRounds,
    );
    const newUser = new this.userModel(createUserDto);

    console.log(createUserDto, newUser);

    if (!newUser) {
      throw new InternalServerErrorException(
        'Problem to create a user. Try again!',
      );
    }

    return newUser.save();
  }

  /**
   * Get all users from collection.
   */
  public async findAll(): Promise<Users[]> {
    return await this.userModel.find();
  }

  /**
   * Find one user from collection by id.
   */
  public async findOneById(id: string): Promise<Users> {
    const user = await this.userModel.findOne({
      _id: id,
    });

    if (!user) {
      throw new NotFoundException(`User not found!`);
    }

    return user;
  }

  /**
   * Find one user from collection by email.
   */
  public async findOneByEmail(email: string): Promise<Users> {
    return await this.userModel.findOne({
      email: email,
    });
  }

  /**
   * Update one user from collection.
   */
  public async update(
    id: string,
    updateUserDto: UpdateUserDto,
  ): Promise<Users> {
    const user = this.userModel.findByIdAndUpdate(id, updateUserDto).exec();

    if (!user) {
      throw new NotFoundException(`User not found!`);
    }

    return user;
  }

  /**
   * Delete one user from collection.
   */
  public async delete(id: string): Promise<Users> {
    const user = await this.userModel.findByIdAndDelete(id).exec();

    if (!user) {
      throw new NotFoundException(`User not found!`);
    }

    return user;
  }
}
