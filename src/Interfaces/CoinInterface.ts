import {CoinResponse} from '../Lib/BinanceApiResponses';
import {ITweet} from './TweetInterface';

export interface Coin {
  coin: CoinResponse;
  count: number;
  tweets: ITweet[];
}

export interface CoinState {
  coin: CoinResponse[];
}

export interface CoinTypes {
  coin: CoinResponse[];
}
