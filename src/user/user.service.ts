import { Injectable } from '@nestjs/common';
import { SignupDto } from 'src/auth/dto/signup.dto';

@Injectable()
export class UserService {
  signUp(signupDto: SignupDto) {
    return signupDto;
  }
}
