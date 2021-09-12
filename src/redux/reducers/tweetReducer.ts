import produce from 'immer';
import {TweetState} from '../../Interfaces/TweetInterface';
import * as type from '../actionTypes';

const initialState: TweetState = {
  tweets: [],
  loading: false,
};

export default (state = initialState, action: any) =>
  produce(state, (draft: any) => {
    switch (action.type) {
      case type.TWEET_REQUEST: {
        draft.loading = true;
        break;
      }
      case type.TWEET_SUCCESS: {
        draft.tweets = action.payload;
        draft.loading = false;
        break;
      }
      default:
        return state;
    }
  });
