import { Test, TestingModule } from '@nestjs/testing';
import { ShopeeOfferService } from './shopee-offer.service';

describe('ShopeeOfferService', () => {
  let service: ShopeeOfferService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShopeeOfferService],
    }).compile();

    service = module.get<ShopeeOfferService>(ShopeeOfferService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
