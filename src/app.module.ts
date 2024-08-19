import { Module } from '@nestjs/common';
import { EventCategoriesModule } from './event-management/event-categories/event-categories.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { RolesModule } from './user-management/roles/roles.module';
import { UsersModule } from './user-management/users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    EventCategoriesModule,
    PrismaModule,
    AuthModule,
    RolesModule,
    UsersModule,
  ],
})
export class AppModule {}
