import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  signUp() {
    return { message: 'User Created Successfully' };
  }
}
