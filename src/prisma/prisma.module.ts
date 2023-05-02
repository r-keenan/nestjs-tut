import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

// Makes this module available to all modules in app without having to import it every time.
@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
