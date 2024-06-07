import * as CryptoJS from 'crypto-js';

export function requisicaoUtil(queryFunction: () => string) {
  const payload = JSON.stringify({ query: queryFunction() });
  const ts = Math.ceil(new Date().getTime() / 1000);
  const factor = process.env.appID + ts + payload + process.env.secret;
  const sign = CryptoJS.SHA256(factor).toString(CryptoJS.enc.Hex);
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `SHA256 Credential=${process.env.appID}, Timestamp=${ts}, Signature=${sign}`,
  };

  return fetch(process.env.urlShopee, {
    method: 'POST',
    headers: headers,
    body: payload,
  });
}
