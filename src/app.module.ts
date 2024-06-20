import { Module } from '@nestjs/common';
import { EventsModule } from './events/events.module';
import { PrismaModule } from './prisma/prisma.module';
import { SpotsModule } from './spots/spots.module';

@Module({
  imports: [EventsModule, PrismaModule, SpotsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
