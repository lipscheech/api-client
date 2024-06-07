import { Module } from '@nestjs/common';
import { ProductOfferController } from './product-offer.controller';
import { ProductOfferService } from './product-offer.service';

@Module({
  controllers: [ProductOfferController],
  providers: [ProductOfferService],
})
export class ProductOfferModule {}
