import produce from 'immer';
import {CoinState} from '../../Interfaces/CoinInterface';
import * as type from '../actionTypes';

const initialState: CoinState = {
  coin: [],
};

export default (state = initialState, action: any) =>
  produce(state, (draft: any) => {
    switch (action.type) {
      case type.COIN_SUCCESS:
        draft.coin = action.coins;
    }
  });
