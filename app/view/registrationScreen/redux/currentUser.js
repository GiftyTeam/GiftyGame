const ADD_CURRENT_USER_NUMBER = 'ADD_CURRENT_USER_NUMBER';

export const selectCurrentUserNumber = (state) =>
  state.currentUserReducer.phoneNumber;

export const addCurrentUserNumber = (payload) => ({
  type: ADD_CURRENT_USER_NUMBER,
  payload,
});

const initialState = {
  phoneNumber: null,
};

export default function currentUserReducer(
  state = initialState,
  {type, payload},
) {
  console.log('state',state);
  console.log('payload',payload);
  switch (type) {
    case ADD_CURRENT_USER_NUMBER:
      return {
        ...state,
        phoneNumber: payload,
      };
    default:
      return state;
  }
}
