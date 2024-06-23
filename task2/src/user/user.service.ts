import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { faker } from '@faker-js/faker';
import { type User } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private prismaService: PrismaService) {}
  getAll() {
    return this.prismaService.user.findMany();
  }

  async seedData(number) {
    const users = Array.from({ length: number }, () => createRandomUser());
    function createRandomUser(): Omit<User, 'id'> {
      return {
        name: faker.person.firstName(),
        surname: faker.person.lastName(),
        age: faker.number.int({ min: 10, max: 100 }),
        gender: faker.person.sex(),
        troubles: faker.datatype.boolean(),
      };
    }
    const result = await this.prismaService.user.createMany({
      data: users,
    });
    return result;
  }

  async updateAndCountTroublesFlag() {
    const updateUsers = await this.prismaService.user.updateMany({
      where: {
        troubles: true,
      },
      data: {
        troubles: false,
      },
    });
    return updateUsers;
  }
}
