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

const coinSaga = [takeLatest(type.COIN_REQUEST, getCoins)];

export default coinSaga;
