import * as type from '../actionTypes';

export function requestUser(username: string) {
  return {
    type: type.USER_REQUEST,
    payload: {
      username,
    },
  };
}
