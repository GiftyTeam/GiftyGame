import {combineReducers} from 'redux';
import {mainScreenReducer} from '../../view/mainScreen/redux/changeReducer';

const rootReducer = combineReducers({mainScreenReducer});

export default rootReducer;
