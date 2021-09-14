import * as type from '../actionTypes';

export function requestUser(usernames: string[]) {
  return {
    type: type.USER_REQUEST,
    payload: {
      usernames,
    },
  };
}
