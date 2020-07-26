import {MODAL} from './constants';

const initialState = {
  modalVisible: false,
};

export const mainScreenReducer = (state = initialState, action) => {
  switch (action.type) {
    case MODAL:
      return {
        ...state,
        modalVisible: action.payload,
      };

    default:
      return state;
  }
};
