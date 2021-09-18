export interface ITweet {
  id: string;
  text: string;
  author_id: string;
}

export interface TweetResponse {
  data: ITweet[];
  includes: {
    users: TweetUserResponse[];
  };
}

export interface Tweet extends ITweet {
  name: string;
  username: string;
}

export interface TweetUserResponse {
  id: string;
  name: string;
  username: string;
}

export interface TweetState {
  tweets: Tweet[];
  loading: boolean;
}
