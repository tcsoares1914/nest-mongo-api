import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '@src/user/schemas/user.schema';
import { CreateUserDto } from '@src/user/dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  /**
   * Create a new user into collection.
   */
  async create(createUserDto: CreateUserDto): Promise<User> {
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
  async findOne(id: string) {
    return await this.userModel
      .find({
        _id: id,
      })
      .exec();
  }
}
