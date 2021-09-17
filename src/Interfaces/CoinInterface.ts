import {CoinResponse} from '../Lib/BinanceApiResponses';

export interface Coin {
  coin: CoinResponse;
  count: number;
}

export interface CoinState {
  coin: CoinResponse[];
}

export interface CoinTypes {
  coin: CoinResponse[];
}
