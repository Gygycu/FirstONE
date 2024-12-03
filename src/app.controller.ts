import { Controller, Delete, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('2')
  gethello2() {
    return this.appService.gethello2();
  }

  @Get('Salut')
  defaultRoute(): string {
    return this.appService.getdefaultRoute();
  }

  @Delete()
  deleteHello() {
    return this.appService.deleteHello();

  }
}
