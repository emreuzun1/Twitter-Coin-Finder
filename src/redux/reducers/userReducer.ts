import produce from 'immer';
import {ActionUser} from '../../Interfaces/UserInterface';
import * as type from '../actionTypes';

const initialState: ActionUser = {
  user: {
    id: '',
    name: '',
    username: '',
  },
};

export default (state = initialState, action: any) =>
  produce(state, (draft: any) => {
    switch (action.type) {
      case type.USER_SUCCESS: {
        draft.user.id = action.payload.id;
        draft.user.name = action.payload.name;
        draft.user.username = action.payload.username;
        break;
      }
      default:
        return state;
    }
  });
