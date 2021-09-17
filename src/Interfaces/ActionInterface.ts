import {ActionUser} from './UserInterface';
import {TweetState} from './TweetInterface';
import {CoinState} from './CoinInterface';

export interface IState {
  user: ActionUser;
  tweet: TweetState;
  coin: CoinState;
}
