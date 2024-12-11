// import { DevelopmentGuard } from './development.guard';
// // import { ConfigService } from '@nestjs/config';
// import { ExecutionContext } from '@nestjs/common';

// describe('DevelopmentGuard', () => {
//   let guard: DevelopmentGuard;
//   let mockConfigService: Partial<any>;

//   beforeEach(() => {
//     mockConfigService = {
//       get: jest.fn(),
//     };

//     guard = new DevelopmentGuard(mockConfigService);
//   });

//   it('should allow access when NODE_ENV is "development"', () => {
//     mockConfigService.get = jest.fn().mockReturnValue('development');

//     const mockContext = {
//       switchToHttp: jest.fn(),
//     } as unknown as ExecutionContext;

//     const result = guard.canActivate(mockContext);

//     expect(result).toBe(true);
//     expect(mockConfigService.get).toHaveBeenCalledWith('NODE_ENV');
//   });

//   it('should deny access when NODE_ENV is not "development"', () => {
//     mockConfigService.get = jest.fn().mockReturnValue('production');

//     const mockContext = {
//       switchToHttp: jest.fn(),
//     } as unknown as ExecutionContext;

//     const result = guard.canActivate(mockContext);

//     expect(result).toBe(false);
//     expect(mockConfigService.get).toHaveBeenCalledWith('NODE_ENV');
//   });
// });
