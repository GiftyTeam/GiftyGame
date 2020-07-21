import {SELECT_ANSWER} from './constants';

const INITIAL_STATE = {
  answerID: '',
};

export const answerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SELECT_ANSWER: {
      return {
        ...state,
        answerID: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
