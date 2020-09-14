import {SELECT_ANSWER, SET_RESULT} from './constants';

const INITIAL_STATE = {
  answerID: '',
  result: {},
};

export const answerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SELECT_ANSWER: {
      return {
        ...state,
        answerID: action.payload,
      };
    }
    case SET_RESULT: {
      return {
        ...state,
        result: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
