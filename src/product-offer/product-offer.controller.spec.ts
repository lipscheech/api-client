import { Test, TestingModule } from '@nestjs/testing';
import { ProductOfferController } from './product-offer.controller';

describe('ProductOfferController', () => {
  let controller: ProductOfferController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductOfferController],
    }).compile();

    controller = module.get<ProductOfferController>(ProductOfferController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
