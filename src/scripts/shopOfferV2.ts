export const shopOfferV2 = (page = 1, limite = 10) => {
  return `
   {
    shopOfferV2(
        page: ${page}
        limit: ${limite}
      ) {
        nodes {
         commissionRate
         imageUrl
         offerLink
         originalLink
         shopId
         shopName
         ratingStar
         shopType
         remainingBudget
         periodStartTime
         periodEndTime
         bannerInfo {
          count
          banners {
            fileName
            imageHeight
            imageWidth
            imageSize
            imageUrl
          }
        }
      }
    }
  }`;
};
