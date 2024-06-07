import { Test, TestingModule } from '@nestjs/testing';
import { GenerateShortLinkController } from './generate-short-link.controller';

describe('GenerateShortLinkController', () => {
  let controller: GenerateShortLinkController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GenerateShortLinkController],
    }).compile();

    controller = module.get<GenerateShortLinkController>(
      GenerateShortLinkController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
