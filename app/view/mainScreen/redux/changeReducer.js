import {TEST} from './constants';
const initialState = {
  test: 'test',
};

export const mainScreenReducer = (state = initialState, action) => {
  switch (action.type) {
    case TEST:
      return {
        ...state,
        test: action.payload,
      };

    default:
      return state;
  }
};
