import {combineReducers} from 'redux';
import {mainScreenReducer} from '../../view/mainScreen/redux/changeReducer';
import {answerReducer} from '../../view/questionScreen/redux/answerReducer';
import {waitingCodeReducer} from '../../view/waitingCodeScreen/redux/codeValidation';

const rootReducer = combineReducers({
  //   mainScreenReducer,
  //   answerReducer,
  codeValidation: waitingCodeReducer,
});

export default rootReducer;
