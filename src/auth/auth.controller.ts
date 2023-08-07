import { Body, Controller, HttpCode, HttpException, HttpStatus, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';
import { Throttle } from '@nestjs/throttler';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Throttle(5, 60)  
  @Post('login')
  @HttpCode(200)
  async login(@Body() body: { username: string; password: string }) {
    
    return await  this.authService.login(body.username, body.password);
  }
  
  @Post('create')
  async create(@Body() body) {

    try {
      return this.authService.createUser(body);
    } catch (error) {
      throw new HttpException(`
      ${error.message},
      ${error.statusCode},
     `, HttpStatus.NON_AUTHORITATIVE_INFORMATION);
    }    
    
  }
}
