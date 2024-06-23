import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':number')
  async getHe(@Param('number') number: number) {
    return this.userService.seedData(number);
  }

  @Get()
  async getHello() {
    return await this.userService.updateAndCountTroublesFlag();
  }
}
