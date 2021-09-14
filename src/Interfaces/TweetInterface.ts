export interface ITweet {
  id: string;
  text: string;
  in_reply_to_user_id: string;
}

export interface TweetState {
  tweets: ITweet[];
  loading: boolean;
}
