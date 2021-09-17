import * as type from '../actionTypes';

export function getCoinsFromBinance() {
  return {
    type: type.COIN_REQUEST,
  };
}
