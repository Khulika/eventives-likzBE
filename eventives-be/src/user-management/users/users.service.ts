import { ForbiddenException, Injectable } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from './dto';
import { PrismaService } from '../../prisma/prisma.service';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async createUser(dto: CreateUserDto) {
    try {
      const user = await this.prisma.users.create({
        data: {
          ...dto,
        },
      });

      return user;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Credentials taken');
        }
      }
      throw error;
    }
  }

  getUsers() {
    return this.prisma.users.findMany();
  }

  getUserById(userId: number) {
    return this.prisma.users.findFirst({
      where: {
        id: userId,
      },
    });
  }

  async editUserById(userId: number, dto: UpdateUserDto) {
    const user = await this.prisma.users.update({
      where: {
        id: userId,
      },
      data: {
        ...dto,
      },
    });

    return user;
  }

  async deleteUserById(userId: number) {
    try {
      const user = await this.prisma.users.delete({
        where: {
          id: userId,
        },
      });
      return user;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2025') {
          throw new ForbiddenException('Resource already deleted');
        }
      }
      throw error;
    }
  }
}
