import {Tweet} from '../Interfaces/TweetInterface';

export type RootStackParamList = {
  Home: undefined;
  Tweet: {symbol: string; tweets: Tweet[]};
};
