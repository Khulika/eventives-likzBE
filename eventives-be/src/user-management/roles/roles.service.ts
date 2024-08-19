import { ForbiddenException, Injectable } from '@nestjs/common';
import { CreateRoleDto, UpdateRoleDto } from './dto';
import { PrismaService } from '../../prisma/prisma.service';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

@Injectable()
export class RolesService {
  constructor(private prisma: PrismaService) {}

  async createRole(dto: CreateRoleDto) {
    try {
      const roles = await this.prisma.roles.create({
        data: {
          ...dto,
        },
      });

      return roles;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Credentials taken');
        }
      }
      throw error;
    }
  }

  getRoles() {
    return this.prisma.roles.findMany();
  }

  getRoleById(id: number) {
    return this.prisma.roles.findFirst({
      where: {
        id,
      },
    });
  }

  async editRoleById(roleId: number, dto: UpdateRoleDto) {
    const roles = await this.prisma.roles.update({
      where: {
        id: roleId,
      },
      data: {
        ...dto,
      },
    });

    return roles;
  }

  async deleteRoleById(roleId: number) {
    try {
      const roles = await this.prisma.roles.delete({
        where: {
          id: roleId,
        },
      });
      return roles;
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
