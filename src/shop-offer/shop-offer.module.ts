import { Module } from '@nestjs/common';
import { ShopOfferController } from './shop-offer.controller';
import { ShopOfferService } from './shop-offer.service';

@Module({
  controllers: [ShopOfferController],
  providers: [ShopOfferService],
})
export class ShopOfferModule {}
