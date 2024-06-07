import { Test, TestingModule } from '@nestjs/testing';
import { GenerateShortLinkService } from './generate-short-link.service';

describe('GenerateShortLinkService', () => {
  let service: GenerateShortLinkService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GenerateShortLinkService],
    }).compile();

    service = module.get<GenerateShortLinkService>(GenerateShortLinkService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
