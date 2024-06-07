import { Injectable } from '@nestjs/common';
import { ShopeeTypes } from 'src/model/shopeeTypes-model';
import { generateShortLink } from 'src/scripts/generateShortLinkV2';
import * as CryptoJS from 'crypto-js';

@Injectable()
export class GenerateShortLinkService {
  async generateShortLink(urlLink: string) {
    if (!process.env.appID || !process.env.secret || !process.env.urlShopee) {
      return null;
    }

    const payload = JSON.stringify({ query: generateShortLink(urlLink) });
    const ts = Math.ceil(new Date().getTime() / 1000);
    const factor = process.env.appID + ts + payload + process.env.secret;
    const sign = CryptoJS.SHA256(factor).toString(CryptoJS.enc.Hex);
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `SHA256 Credential=${process.env.appID}, Timestamp=${ts}, Signature=${sign}`,
    };

    const response = await fetch(process.env.urlShopee, {
      method: 'POST',
      headers: headers,
      body: payload,
    });
    const data = await response.json();
    const offers = data.data as ShopeeTypes;
    return offers?.generateShortLink;
  }
}
