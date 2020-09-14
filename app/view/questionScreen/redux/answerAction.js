import {SELECT_ANSWER, SET_RESULT} from './constants';

export const setSelectedAnswerID = (answerID) => ({
  type: SELECT_ANSWER,
  payload: answerID,
});

// result :{totalPoint, correctAnswers, wrongAnswers}
export const setResult = (result) => ({
  type: SET_RESULT,
  payload: result
})
