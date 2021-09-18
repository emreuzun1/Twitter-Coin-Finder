import axios from './binanceAxios';
import {AxiosResponse} from 'axios';
import {BinanceResponse, BinanceSymbolResponse} from './BinanceApiResponses';

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

export async function getValueOfSymbol(symbol: string) {
  const response: AxiosResponse<BinanceSymbolResponse> = await axios.get(
    '/api/v3/ticker/price',
    {
      params: {
        symbol: symbol,
      },
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
  const value = await JSON.parse(response.data.price);
  return value;
}
