import { ExecutionContext } from '@nestjs/common';

const mockExecutionContext: Partial<
  Record<jest.FunctionPropertyNames<ExecutionContext>, jest.MockedFunction<any>>
> = {
  switchToHttp: jest.fn().mockReturnValue({
    getRequest: jest.fn(),
    getResponse: jest.fn(),
  }),
};
