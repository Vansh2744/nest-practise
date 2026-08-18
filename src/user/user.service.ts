import { ConflictException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { SignupDto } from 'src/auth/dto/signup.dto';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}
  async signUp(signupDto: SignupDto) {
    try {
      const user = await this.userModel.create({
        username: signupDto.username,
        email: signupDto.email,
        password: signupDto.password,
      });

      return user;
    } catch (error) {
      const DUPLICATE_KEY_CODE = 11000;
      if ((error as { code?: number }).code === DUPLICATE_KEY_CODE) {
        throw new ConflictException('Email Already Exists');
      }

      throw error;
    }
  }
}
