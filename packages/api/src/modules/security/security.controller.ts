import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { SecurityService } from './security.service';
import { LoginDto } from './dto/login.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('security')
@ApiTags('security')
export class SecurityController {
  constructor(private readonly securityService: SecurityService) {}

  @Post()
  async login(@Body() body: LoginDto) {
    return await this.securityService.login(body);
  }

  @Get('/getTokenData/:token')
  async getTokenData(@Param('token') token: string) {
    return await this.securityService.getTokenData(token);
  }
}
