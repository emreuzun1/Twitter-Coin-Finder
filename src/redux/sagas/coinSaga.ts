import {call, put, takeLatest} from '@redux-saga/core/effects';

import {getSymbols} from '../../Lib/binanceApi';
import * as type from '../actionTypes';

function* getCoins() {
  try {
    const {
      data: {symbols},
    } = yield call(getSymbols);
    yield put({type: type.COIN_SUCCESS, coins: symbols});
  } catch (err) {
    console.log(err);
  }
}

function* getSymbolPrice(action: any) {
  const {symbol} = action;
  console.log(symbol);
}

const coinSaga = [
  takeLatest(type.COIN_REQUEST, getCoins),
  takeLatest(type.COIN_PRICE_REQUEST, getSymbolPrice),
];

export default coinSaga;
