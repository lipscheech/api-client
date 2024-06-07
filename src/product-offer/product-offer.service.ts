import { Injectable } from '@nestjs/common';
import { ShopeeTypes } from 'src/model/shopeeTypes-model';
import { productOfferV2 } from 'src/scripts/productOfferV2';
import { requisicaoUtil } from 'src/shared/utils/requisicao.util';

@Injectable()
export class ProductOfferService {
  async requisitar() {
    if (!process.env.appID || !process.env.secret || !process.env.urlShopee) {
      return null;
    }

    const response = await requisicaoUtil(productOfferV2);
    const data = await response.json();
    const offers = data.data as ShopeeTypes;
    return offers?.productOfferV2?.nodes;
  }
}
