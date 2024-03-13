import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import apiConfig from '@src/config/api.config';
import { MongooseModule } from '@nestjs/mongoose';
import { HealthCheckModule } from '@src/health-check/health-check.module';
import { UsersModule } from '@src/users/users.module';
import { AuthModule } from './auth/auth.module';

const importedModules = [HealthCheckModule, AuthModule, UsersModule];

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [apiConfig],
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.MONGODB_CONNECTION_URL),
    ...importedModules,
  ],
})
export class AppModule {}
