import { PartialType } from '@nestjs/swagger';
import { CreateTypeIdentityDto } from './create-type-identity.dto';

export class UpdateTypeIdentityDto extends PartialType(CreateTypeIdentityDto) {}
