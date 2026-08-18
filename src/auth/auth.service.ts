import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { SignupDto } from './dto/signup.dto';
import bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async signUp(signupDto: SignupDto) {
    const hashPassword = await bcrypt.hash(signupDto.password, 10);
    const user = await this.userService.signUp({
      ...signupDto,
      password: hashPassword,
    });
    return user;
  }
}
