import { forwardRef, Module } from '@nestjs/common';

import { PrismaService } from '../core/orm/prisma.service';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { PetsService } from '../pets/pets.service';
import { PetsModule } from '../pets/pets.module';
import { PrismaModule } from '../core/orm/prisma.module';

@Module({
  controllers: [UsersController],
  imports: [forwardRef(() => PetsModule), PrismaModule],
  providers: [PrismaService, UsersService, PetsService],
})
export class UsersModule {}
