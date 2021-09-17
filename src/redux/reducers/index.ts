import {combineReducers} from 'redux';
import user from './userReducer';
import tweet from './tweetReducer';
import coin from './coinReducer';

const rootReducer = combineReducers({
  user,
  tweet,
  coin,
});

export default rootReducer;
