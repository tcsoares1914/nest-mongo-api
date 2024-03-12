import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import apiConfig from '@src/config/api.config';
import { HealthCheckModule } from './health-check/health-check.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [apiConfig],
      isGlobal: true,
    }),
    HealthCheckModule,
  ],
})
export class AppModule {}
