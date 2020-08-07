import {combineReducers} from 'redux';
import {mainScreenReducer} from '../../view/mainScreen/redux/changeReducer';
import {answerReducer} from '../../view/questionScreen/redux/answerReducer';
import {profileReducer} from '../../view/profileScreen/redux/profileReducer';
const rootReducer = combineReducers({
  mainScreenData: mainScreenReducer,
  answerReducer,
  userCredentials: profileReducer,
});

export default rootReducer;
