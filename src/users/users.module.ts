import { Module } from '@nestjs/common';

import { PrismaService } from '../core/orm/prisma.service';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { PetsService } from '../pets/pets.service';
import { PetsModule } from '../pets/pets.module';

@Module({
  controllers: [UsersController],
  imports: [PetsModule],
  providers: [PrismaService, UsersService, PetsService],
})
export class UsersModule {}
