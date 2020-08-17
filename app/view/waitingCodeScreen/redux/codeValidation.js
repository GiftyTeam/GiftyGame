const MODULE_NAME = 'codeValidation';

export const selectIsCodeValidate = (state) =>
  state[MODULE_NAME].isCodeValidated;
export const selectConfirmCode = (state) => state[MODULE_NAME].confirmCode;
export const selectEnteredCode = (state) => state[MODULE_NAME].enteredCode;
export const selectIsUserStartedTypingCode = (state) =>
  state[MODULE_NAME].isUserStartedTypingCode;

const CODE_VALIDATION = 'CODE_VALIDATION';
const CONFIRM_CODE = 'CONFIRM_CODE';
const ENTERED_CODE = 'ENTERED_CODE';
const USER_STARTED_TYPING_CODE = 'USER_STARTED_TYPING_CODE';

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

export const setUserStartedTypingCode = (payload) => ({
  type: USER_STARTED_TYPING_CODE,
  payload,
});

const initialState = {
  isCodeValidated: false,
  confirmCode: null,
  enteredCode: null,
  isUserStartedTypingCode: false,
};

export const waitingCodeReducer = (state = initialState, {type, payload}) => {
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
    case USER_STARTED_TYPING_CODE:
      return {
        ...state,
        isUserStartedTypingCode: payload,
      };
    default:
      return state;
  }
};
