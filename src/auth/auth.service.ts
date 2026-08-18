import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { SignupDto } from './dto/signup.dto';
import bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async signUp(signupDto: SignupDto) {
    const hashPassword = await bcrypt.hash(signupDto.password, 10);
    const user = await this.userService.signUp({
      ...signupDto,
      password: hashPassword,
    });
    const payload = { sub: user.id, username: user.username };
    const token = await this.jwtService.signAsync(payload);
    return { token };
  }
}
