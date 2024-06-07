import { Controller, Get } from '@nestjs/common';
import { ProductOfferService } from './product-offer.service';

@Controller('product-offer')
export class ProductOfferController {
  constructor(private productOfferService: ProductOfferService) {}

  @Get()
  async getProductOffer() {
    return await this.productOfferService.requisitar();
  }
}
