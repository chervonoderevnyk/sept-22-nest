import { forwardRef, Module } from '@nestjs/common';

import { UsersModule } from '../users/users.module';
import { PetsService } from './pets.service';
import { PetsController } from './pets.controller';
import { PrismaService } from '../core/orm/prisma.service';
import { UsersService } from '../users/users.service';
import { PrismaModule } from '../core/orm/prisma.module';

@Module({
  imports: [forwardRef(() => UsersModule), PrismaModule],
  exports: [PetsService],
  providers: [PetsService, UsersService, PrismaService],
  controllers: [PetsController],
})
export class PetsModule {}
