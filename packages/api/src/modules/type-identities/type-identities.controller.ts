import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TypeIdentitiesService } from './type-identities.service';
import { CreateTypeIdentityDto } from './dto/create-type-identity.dto';
import { UpdateTypeIdentityDto } from './dto/update-type-identity.dto';

@Controller('type-identities')
export class TypeIdentitiesController {
  constructor(private readonly typeIdentitiesService: TypeIdentitiesService) {}

  @Post()
  create(@Body() createTypeIdentityDto: CreateTypeIdentityDto) {
    return this.typeIdentitiesService.create(createTypeIdentityDto);
  }

  @Get()
  findAll() {
    return this.typeIdentitiesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.typeIdentitiesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTypeIdentityDto: UpdateTypeIdentityDto) {
    return this.typeIdentitiesService.update(+id, updateTypeIdentityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.typeIdentitiesService.remove(+id);
  }
}
