import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { RolesService } from './roles.service';
import { CreateRoleDto, UpdateRoleDto } from './dto';

@Controller('roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @Post()
  createRole(@Body() createRoleDto: CreateRoleDto) {
    return this.rolesService.createRole(createRoleDto);
  }

  @Get()
  getRoles() {
    return this.rolesService.getRoles();
  }

  @Get(':id')
  getRoleById(@Param('id', ParseIntPipe) id: string) {
    return this.rolesService.getRoleById(+id);
  }

  @Patch(':id')
  editRoleById(
    @Param('id', ParseIntPipe) id: string,
    @Body() updateRoleDto: UpdateRoleDto,
  ) {
    return this.rolesService.editRoleById(+id, updateRoleDto);
  }

  @Delete(':id')
  deleteRoleById(@Param('id', ParseIntPipe) id: string) {
    return this.rolesService.deleteRoleById(+id);
  }
}
