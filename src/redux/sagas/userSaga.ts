import {call, put, takeLatest} from 'redux-saga/effects';
import {requestUser} from '../../Lib/api';
import {USER_REQUEST, USER_SUCCESS} from '../actionTypes';

function* getUser(action: any) {
  try {
    const {username} = action.payload;
    const {
      data: {data},
    } = yield call(requestUser, username);
    yield put({type: USER_SUCCESS, payload: data});
  } catch (err) {
    console.log(err);
  }
}

const userSaga = [takeLatest(USER_REQUEST, getUser)];

export default userSaga;