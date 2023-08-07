import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/sequelize';
import { AuthModel } from './models/auth.model';
import { CreateAuthDto } from './dto/create-auth.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(AuthModel)
    private authModel: typeof AuthModel,
    private jwtService: JwtService,
  ) { }

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.authModel.findOne({ where: { username } });

    if (user && user.password === password) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async createUser(createUserDto: any): Promise<AuthModel> {
    const { username, email } = createUserDto;
  
    const existingEmailUser = await this.authModel.findOne({ where: { email } });
    if (existingEmailUser) {
      throw new HttpException('Email já cadastrado', HttpStatus.BAD_REQUEST);
    }
  
    const existingUsernameUser = await this.authModel.findOne({ where: { username } });
    if (existingUsernameUser) {
      throw new HttpException('Username já cadastrado', HttpStatus.BAD_REQUEST);
    }
  
    const payload = { sub: createUserDto.id, username: createUserDto.password };
    const token = this.jwtService.sign(payload);
  
    try {
      return this.authModel.create({ ...createUserDto, token });
    } catch (error) {
      throw new HttpException('Failed to create user', HttpStatus.BAD_REQUEST);
    }
  }
  
  async login(username: string, password: string) {
    const user = await this.validateUser(username, password);

    if (!user) {
      throw new UnauthorizedException('Credenciais inválidas');
    }

    const payload = { sub: user.id, username: user.username };
    const token = this.jwtService.sign(payload);

    if (user.id) {
      await this.authModel.update({ token }, { where: { id: user.id } });
    }

    return {
      access_token: token,
    };
  }


}
