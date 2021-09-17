import {all} from '@redux-saga/core/effects';
import user from './userSaga';
import tweet from './tweetSaga';
import coin from './coinSaga';

export default function* rootSaga() {
  yield all([...user, ...tweet, ...coin]);
}
