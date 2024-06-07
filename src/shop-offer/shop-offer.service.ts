import { Injectable } from '@nestjs/common';
import { ShopeeTypes } from 'src/model/shopeeTypes-model';
import { shopOfferV2 } from 'src/scripts/shopOfferV2';
import { requisicaoUtil } from 'src/shared/utils/requisicao.util';

@Injectable()
export class ShopOfferService {
  async requisitar() {
    if (!process.env.appID || !process.env.secret || !process.env.urlShopee) {
      return null;
    }

    const response = await requisicaoUtil(shopOfferV2);
    const data = await response.json();
    const offers = data.data as ShopeeTypes;
    return offers?.shopOfferV2?.nodes;
  }
}
