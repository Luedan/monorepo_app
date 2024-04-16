import { Injectable } from '@nestjs/common';
import { CreateTypeIdentityDto } from './dto/create-type-identity.dto';
import { UpdateTypeIdentityDto } from './dto/update-type-identity.dto';

@Injectable()
export class TypeIdentitiesService {
  create(createTypeIdentityDto: CreateTypeIdentityDto) {
    return 'This action adds a new typeIdentity';
  }

  findAll() {
    return `This action returns all typeIdentities`;
  }

  findOne(id: number) {
    return `This action returns a #${id} typeIdentity`;
  }

  update(id: number, updateTypeIdentityDto: UpdateTypeIdentityDto) {
    return `This action updates a #${id} typeIdentity`;
  }

  remove(id: number) {
    return `This action removes a #${id} typeIdentity`;
  }
}
