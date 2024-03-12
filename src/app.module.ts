import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import apiConfig from '@src/config/api.config';
import { MongooseModule } from '@nestjs/mongoose';
import { HealthCheckModule } from './health-check/health-check.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [apiConfig],
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.MONGODB_CONNECTION_URL),
    HealthCheckModule,
    UserModule,
  ],
})
export class AppModule {}
