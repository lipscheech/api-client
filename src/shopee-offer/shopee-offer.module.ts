import { Module } from '@nestjs/common';
import { ShopeeOfferController } from './shopee-offer.controller';
import { ShopeeOfferService } from './shopee-offer.service';

@Module({
  controllers: [ShopeeOfferController],
  providers: [ShopeeOfferService],
})
export class ShopeeOfferModule {}
