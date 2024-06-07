import { Controller, Get } from '@nestjs/common';
import { ShopOfferService } from './shop-offer.service';

@Controller('shop-offer')
export class ShopOfferController {
  constructor(private readonly shopOfferService: ShopOfferService) {}

  @Get()
  async requisitar() {
    return this.shopOfferService.requisitar();
  }
}
