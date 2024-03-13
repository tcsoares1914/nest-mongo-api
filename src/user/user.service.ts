import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '@src/user/schemas/user.schema';
import { CreateUserDto } from '@src/user/dto/create-user.dto';
import { UpdateUserDto } from '@src/user/dto/update-user.dto';

@Injectable()
export class UserService {
  /**
   * Create a new instance for Model.
   */
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  /**
   * Create a new user into collection.
   */
  public async create(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = new this.userModel(createUserDto);

    return createdUser.save();
  }

  /**
   * Get all users from collection.
   */
  public async findAll(): Promise<User[]> {
    return await this.userModel.find().exec();
  }

  /**
   * Find one user from collection.
   */
  public async findOne(id: string): Promise<User> {
    const user = await this.userModel
      .findOne({
        _id: id,
      })
      .exec();

    if (!user) {
      throw new NotFoundException(`User #${id} not found!`);
    }

    return user;
  }

  /**
   * Update one user from collection.
   */
  public async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    const user = this.userModel.findByIdAndUpdate(id, updateUserDto).exec();

    if (!user) {
      throw new NotFoundException(`User #${id} not found!`);
    }

    return user;
  }

  /**
   * Delete one user from collection.
   */
  public async delete(id: string): Promise<User> {
    const user = await this.userModel.findByIdAndDelete(id).exec();

    if (!user) {
      throw new NotFoundException(`User #${id} not found!`);
    }

    return user;
  }
}
