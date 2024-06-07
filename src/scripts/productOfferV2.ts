export const productOfferV2 = (page = 0, limite = 10) => {
  return `
  {
     productOfferV2(
      page: ${page}
      isAMSOffer: true
      limit: ${limite}
     ) {
       nodes {
        commissionRate
        sellerCommissionRate
        commission
        sales
        price
        priceMax
        priceMin
        ratingStar
        imageUrl
        productName
        shopName
        offerLink
        productLink
        periodStartTime
        periodStartTime
       }
     }
   }
  `;
};
