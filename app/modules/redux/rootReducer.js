import {combineReducers} from 'redux';
import {mainScreenReducer} from '../../view/mainScreen/redux/changeReducer';
import {answerReducer} from '../../view/questionScreen/redux/answerReducer';
import {waitingCodeReducer} from '../../view/waitingCodeScreen/redux/codeValidation';
import {profileReducer} from '../../view/profileScreen/redux/profileReducer';
import {currentUserReducer} from '../../view/registrationScreen/redux/currentUser';

const rootReducer = combineReducers({
  // answerData: answerReducer,
  codeValidation: waitingCodeReducer,
  mainScreenData: mainScreenReducer,
  answerReducer,
  userCredentials: profileReducer,
  currentUser: currentUserReducer,
});

export default rootReducer;
