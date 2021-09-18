import {CoinResponse} from '../Lib/BinanceApiResponses';
import {Tweet} from './TweetInterface';

export interface Coin {
  coin: CoinResponse;
  count: number;
  tweets: Tweet[];
}

export interface CoinState {
  coin: CoinResponse[];
}

export interface CoinTypes {
  coin: CoinResponse[];
}
