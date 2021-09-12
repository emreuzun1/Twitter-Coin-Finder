export interface ITweet {
  id: string;
  text: string;
}

export interface TweetState {
  tweets: ITweet[];
  loading: boolean;
}
