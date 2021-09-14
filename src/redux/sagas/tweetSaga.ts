import {call, put, takeLatest} from '@redux-saga/core/effects';
import {requestTweets} from '../../Lib/api';
import * as type from '../actionTypes';

function* getTweets(action: any) {
  try {
    const {ids} = action.payload;
    const {data} = yield call(requestTweets, ids);
    yield put({type: type.TWEET_SUCCESS, payload: data});
  } catch (err) {
    console.log('err', err);
  }
}

const tweetSaga = [takeLatest(type.TWEET_REQUEST, getTweets)];

export default tweetSaga;
