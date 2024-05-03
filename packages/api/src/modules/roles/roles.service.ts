import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { RoleRepository } from './roles.repository';

@Injectable()
export class RolesService {
  constructor(private readonly _roleRepository: RoleRepository) {}
  async create(createRoleDto: CreateRoleDto) {
    const role = await this._roleRepository.createRole(createRoleDto);
    return role;
  }

  async findAll() {
    const data = await this._roleRepository.getAllRoles();
    return data;
  }

  async findOne(id: number) {
    const role = await this._roleRepository.findRoleById({
      where: { idRole: id },
    });
    return role;
  }

  async update(id: number, updateRoleDto: UpdateRoleDto) {
    const role = await this._roleRepository.updateRole(id, updateRoleDto);
    return role;
  }

  async remove(id: number) {
    const role = await this._roleRepository.deleteRole({
      idRole: id,
    });
    return role;
  }
}
