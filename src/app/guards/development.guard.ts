import { CanActivate, Injectable } from '@nestjs/common';

@Injectable()
export class DevelopmentGuard implements CanActivate {
  canActivate(): boolean {
    const environment = process.env.NODE_ENV;
    if (environment) return environment === 'development';
  }
}
