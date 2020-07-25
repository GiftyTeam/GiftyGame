import {combineReducers} from 'redux';
import {mainScreenReducer} from '../../view/mainScreen/redux/changeReducer';
import {answerReducer} from '../../view/questionScreen/redux/answerReducer';

const rootReducer = combineReducers({mainScreenReducer, answerReducer});

export default rootReducer;
