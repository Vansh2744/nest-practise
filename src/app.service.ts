import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Vansh!';
  }
  currentUser(): object {
    return { name: 'Vansh', email: 'vansh@gmail.com', age: 23 };
  }
}
