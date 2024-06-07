import { Controller, Get } from '@nestjs/common';
import { ShopeeOfferService } from './shopee-offer.service';

@Controller('shopee-offer')
export class ShopeeOfferController {
  constructor(private readonly shopeeOfferService: ShopeeOfferService) {}

  @Get()
  async requisitar() {
    return this.shopeeOfferService.requisitar();
  }
}
