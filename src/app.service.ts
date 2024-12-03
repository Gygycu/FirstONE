import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World00';
  }

  gethello2() {
    return {
      test: 'Hello World! 2'
    };
  }
  getdefaultRoute(): string {
    return "Salut";

  }
  deleteHello(): number {
    return Number.MAX_SAFE_INTEGER;

  }

}
