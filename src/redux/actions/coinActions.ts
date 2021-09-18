import * as type from '../actionTypes';

export function getCoinsFromBinance() {
  return {
    type: type.COIN_REQUEST,
  };
}

export function getCoinPrice(symbol: string) {
  return {
    type: type.COIN_PRICE_REQUEST,
    symbol,
  };
}
