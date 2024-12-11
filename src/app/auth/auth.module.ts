import { Module } from '@nestjs/common';
import { CustomJwtModule } from './jwt/jwt.module';

@Module({
  imports: [CustomJwtModule],
})
export class AuthModule {}
