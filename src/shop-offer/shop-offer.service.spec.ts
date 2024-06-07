import { Test, TestingModule } from '@nestjs/testing';
import { ShopOfferService } from './shop-offer.service';

describe('ShopOfferService', () => {
  let service: ShopOfferService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShopOfferService],
    }).compile();

    service = module.get<ShopOfferService>(ShopOfferService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
