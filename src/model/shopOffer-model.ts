import { BannerInfo } from './bannerInfo-model';

export type ShopOfferV2 = {
  commissionRate?: string;
  imageUrl?: string;
  offerLink?: string;
  originalLink?: string;
  shopId?: number;
  shopName?: string;
  ratingStar?: string;
  shopType?: number;
  remainingBudget?: number;
  periodStartTime?: number;
  periodEndTime?: number;
  bannerInfo?: BannerInfo[];
};
