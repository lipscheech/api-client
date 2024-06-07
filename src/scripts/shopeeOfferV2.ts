export const shopeeOfferV2 = (page = 0, limite = 10) => {
  return `
   {
      shopeeOfferV2(
        page: ${page}
        limit: ${limite}
      ) {
        nodes {
         commissionRate
         imageUrl
         offerLink
         originalLink
         offerName
         offerType
         categoryId
         collectionId
         periodStartTime
         periodEndTime
        }
      }
    }
   `;
};
