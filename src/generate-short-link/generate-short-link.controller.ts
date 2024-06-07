import { Body, Controller, Get } from '@nestjs/common';
import { GenerateShortLinkService } from './generate-short-link.service';

@Controller('generate-short-link')
export class GenerateShortLinkController {
  constructor(
    private readonly generateShortLinkService: GenerateShortLinkService,
  ) {}

  @Get()
  async generateShortLink(@Body('urlLink') urlLink: string) {
    return this.generateShortLinkService.generateShortLink(urlLink);
  }
}
