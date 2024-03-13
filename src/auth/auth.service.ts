import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UsersService } from '@src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { SignInDto } from '@src/auth/dto/sign-in.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(signInDto: SignInDto): Promise<any> {
    const user = await this.usersService.findOneByEmail(signInDto.email);
    if (!user) {
      throw new NotFoundException(`User not found!`);
    }

    const isMatch = await bcrypt.compare(signInDto.password, user.password);

    if (!isMatch) {
      throw new UnauthorizedException();
    }

    return {
      access_token: await this.jwtService.signAsync({
        email: user.email,
      }),
      token_type: 'bearer',
      expires_in: 600000,
    };
  }
}
