import * as type from '../actionTypes';

export function requestTweets(id: string) {
  return {
    type: type.TWEET_REQUEST,
    payload: {
      id,
    },
  };
}
