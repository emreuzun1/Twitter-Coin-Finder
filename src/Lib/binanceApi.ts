import axios from './binanceAxios';
import {AxiosResponse} from 'axios';
import {BinanceResponse} from './BinanceApiResponses';

export async function getSymbols() {
  const response: AxiosResponse<BinanceResponse> = await axios.get(
    '/api/v3/exchangeInfo',
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
  return response;
}
