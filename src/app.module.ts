import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { PetsModule } from './pets/pets.module';
import { PrismaService } from './core/orm/prisma.service';

@Module({
  controllers: [AppController, UsersController],
  imports: [UsersModule, PetsModule],
  providers: [AppService, UsersService, PrismaService],
})
export class AppModule {}
