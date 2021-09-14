import * as type from '../actionTypes';

export function requestTweets(ids: string[]) {
  return {
    type: type.TWEET_REQUEST,
    payload: {
      ids,
    },
  };
}
