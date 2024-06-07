import { GenerateShortLink } from './generateShortLink-model';
import { ProductOffer } from './productOffer-model';
import { ShopeeOffer } from './shopeeOffer-model';
import { ShopOfferV2 } from './shopOffer-model';

export type ShopeeTypes = {
  shopeeOfferV2?: {
    nodes?: ShopeeOffer[];
    pageInfo: {
      page?: number;
      limit?: number;
      hasPage?: boolean;
      scrollId?: number;
    };
  };
  productOfferV2?: {
    nodes?: ProductOffer[];
    pageInfo: {
      page?: number;
      limit?: number;
      hasPage?: boolean;
      scrollId?: number;
    };
  };
  shopOfferV2?: {
    nodes?: ShopOfferV2[];
    pageInfo: {
      page?: number;
      limit?: number;
      hasPage?: boolean;
      scrollId?: number;
    };
  };
  generateShortLink?: GenerateShortLink;
};
