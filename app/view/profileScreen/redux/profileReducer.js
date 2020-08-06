import {ADD_USER_CREDENTIALS} from './constants';

const MODULE_NAME = 'userCredentials';
export const getUserCredentials = (state) => state[MODULE_NAME].userCredentials;

const initialState = {
  userCredentials: {},
};

export function profileReducer(state = initialState, {type, payload}) {
  switch (type) {
    case ADD_USER_CREDENTIALS:
      return {
        ...state,
        userCredentials: {
          userId: payload.userId,
          name: payload.name,
          surname: payload.surname,
          address: payload.address,
          city: payload.city,
          avatar: payload.avatar,
        },
      };

    default:
      return state;
  }
}
