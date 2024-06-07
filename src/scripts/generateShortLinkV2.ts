export const generateShortLink = (url: string) => {
  return `
      mutation{
         generateShortLink(
            input: {
               originUrl: "${url}",
               subIds: ["s1","s2","s3","s4","s5"]
            }
         ){
            shortLink
         }
      }
   
   `;
};
