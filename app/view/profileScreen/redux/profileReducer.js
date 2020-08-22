import {ADD_USER_CREDENTIALS} from './constants';

export const getUserCredentials = (state) => state.profileReducer.userExtraData;

const initialState = {
  userExtraData: {},
};

export default function profileReducer(state = initialState, {type, payload}) {
  switch (type) {
    case ADD_USER_CREDENTIALS:
      return {
        ...state,
        userExtraData: {
          firstName: payload.firstName,
          lastName: payload.lastName,
          city: payload.city,
          street: payload.street,
          avatar: payload.avatar,
        },
      };

    default:
      return state;
  }
}
