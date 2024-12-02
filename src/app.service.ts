import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  gethello2() {
    return {
      test: 'Hello World! 2'
    };
  }
}
