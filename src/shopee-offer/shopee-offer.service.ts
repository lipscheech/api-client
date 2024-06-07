import { Injectable } from '@nestjs/common';
import { ShopeeTypes } from 'src/model/shopeeTypes-model';
import { shopeeOfferV2 } from 'src/scripts/shopeeOfferV2';
import { requisicaoUtil } from 'src/shared/utils/requisicao.util';

@Injectable()
export class ShopeeOfferService {
  async requisitar() {
    if (!process.env.appID || !process.env.secret || !process.env.urlShopee) {
      return null;
    }

    const response = await requisicaoUtil(shopeeOfferV2);
    const data = await response.json();
    const offers = data.data as ShopeeTypes;
    return offers?.shopeeOfferV2?.nodes;
  }
}
