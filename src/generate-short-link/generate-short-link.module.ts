import { Module } from '@nestjs/common';
import { GenerateShortLinkController } from './generate-short-link.controller';
import { GenerateShortLinkService } from './generate-short-link.service';

@Module({
  controllers: [GenerateShortLinkController],
  providers: [GenerateShortLinkService],
})
export class GenerateShortLinkModule {}
