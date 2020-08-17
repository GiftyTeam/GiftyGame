const MODULE_NAME = 'codeValidation';

export const selectIsCodeValidate = (state) =>
  state[MODULE_NAME].isCodeValidated;
export const selectConfirmCode = (state) => state[MODULE_NAME].confirmCode;
export const selectEnteredCode = (state) => state[MODULE_NAME].enteredCode;

const CODE_VALIDATION = 'CODE_VALIDATION';
const CONFIRM_CODE = 'CONFIRM_CODE';
const ENTERED_CODE = 'ENTERED_CODE';

export const setCodeValidated = (payload) => ({
  type: CODE_VALIDATION,
  payload,
});
export const setConfirmCode = (payload) => ({
  type: CONFIRM_CODE,
  payload,
});
export const setEnteredCode = (payload) => ({
  type: ENTERED_CODE,
  payload,
});

const initialState = {
  isCodeValidated: false,
  confirmCode: null,
  enteredCode: null,
};

export const waitingCodeReducer = (state = initialState, {type, payload}) => {
  console.log('state', state);
  switch (type) {
    case CODE_VALIDATION:
      return {
        ...state,
        isCodeValidated: payload,
      };

    case CONFIRM_CODE:
      return {
        ...state,
        confirmCode: payload,
      };

    case ENTERED_CODE:
      return {
        ...state,
        enteredCode: payload,
      };
    default:
      return state;
  }
};
