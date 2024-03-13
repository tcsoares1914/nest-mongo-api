import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from '@src/auth/auth.controller';
import { AuthService } from '@src/auth/auth.service';
import { UsersModule } from '@src/users/users.module';
import { jwtConstants } from '@src/auth/constants';

@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '600s' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
