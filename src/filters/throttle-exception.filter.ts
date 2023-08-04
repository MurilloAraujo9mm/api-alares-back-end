import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common';
import { ThrottlerException } from '@nestjs/throttler';
import { Response } from 'express';

@Catch(ThrottlerException)
export class ThrottleExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    response.status(429).json({
      statusCode: 429,
      message: 'Você está enviando solicitações muito rapidamente. Por favor, aguarde um momento.',
    });
  }
}
