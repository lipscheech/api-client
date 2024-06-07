import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductOfferModule } from './product-offer/product-offer.module';
import { ConfigModule } from '@nestjs/config';
import { ShopeeOfferModule } from './shopee-offer/shopee-offer.module';
import { ShopOfferController } from './shop-offer/shop-offer.controller';
import { ShopOfferService } from './shop-offer/shop-offer.service';
import { ShopOfferModule } from './shop-offer/shop-offer.module';
import { GenerateShortLinkModule } from './generate-short-link/generate-short-link.module';

@Module({
  imports: [
    ProductOfferModule,
    ConfigModule.forRoot(),
    ShopeeOfferModule,
    ShopOfferModule,
    GenerateShortLinkModule,
  ],
  controllers: [AppController, ShopOfferController],
  providers: [AppService, ShopOfferService],
})
export class AppModule {}
