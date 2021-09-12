import {ActionUser} from './UserInterface';
import {TweetState} from './TweetInterface';

export interface IState {
  user: ActionUser;
  tweet: TweetState;
}
