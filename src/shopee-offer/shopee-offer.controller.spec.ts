import { Test, TestingModule } from '@nestjs/testing';
import { ShopeeOfferController } from './shopee-offer.controller';

describe('ShopeeOfferController', () => {
  let controller: ShopeeOfferController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShopeeOfferController],
    }).compile();

    controller = module.get<ShopeeOfferController>(ShopeeOfferController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
