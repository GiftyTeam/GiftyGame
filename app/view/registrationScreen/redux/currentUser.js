const MODULE_NAME = 'currentUser';
const ADD_CURRENT_USER_NUMBER = 'ADD_CURRENT_USER_NUMBER';

export const selectCurrentUserNumber = (state) =>
  state[MODULE_NAME].phoneNumber;

export const addCurrentUserNumber = (payload) => ({
  type: ADD_CURRENT_USER_NUMBER,
  payload,
});

const initialState = {
  phoneNumber: null,
};

export const currentUserReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case ADD_CURRENT_USER_NUMBER:
      return {
        ...state,
        phoneNumber: payload,
      };
    default:
      return state;
  }
};
