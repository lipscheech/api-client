import { Test, TestingModule } from '@nestjs/testing';
import { ShopOfferController } from './shop-offer.controller';

describe('ShopOfferController', () => {
  let controller: ShopOfferController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShopOfferController],
    }).compile();

    controller = module.get<ShopOfferController>(ShopOfferController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
