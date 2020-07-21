import {SELECT_ANSWER} from './constants';

export const setSelectedAnswerID = (answerID) => ({
  type: SELECT_ANSWER,
  payload: answerID,
});
