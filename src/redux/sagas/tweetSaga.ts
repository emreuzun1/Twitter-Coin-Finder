import {call, put, takeLatest} from '@redux-saga/core/effects';
import {requestTweets} from '../../Lib/api';
import * as type from '../actionTypes';

function* getTweets(action: any) {
  try {
    const {id} = action.payload;
    const {
      data: {data},
    } = yield call(requestTweets, id);
    yield put({type: type.TWEET_SUCCESS, payload: data});
  } catch (err) {
    console.log('err', err);
  }
}

const tweetSaga = [takeLatest(type.TWEET_REQUEST, getTweets)];

export default tweetSaga;
