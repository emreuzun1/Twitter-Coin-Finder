import produce from 'immer';
import {ActionUser} from '../../Interfaces/UserInterface';
import * as type from '../actionTypes';

const initialState: ActionUser = {
  users: [],
};

export default (state = initialState, action: any) =>
  produce(state, (draft: any) => {
    switch (action.type) {
      case type.USER_SUCCESS: {
        draft.users = action.payload;
        break;
      }
      default:
        return state;
    }
  });
