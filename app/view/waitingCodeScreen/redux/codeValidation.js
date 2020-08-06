const MODULE_NAME = 'codeValidation';

export const selectIsCodeValidate = (state) => {
  state[MODULE_NAME];
};
const CODE_VALIDATION = 'CODE_VALIDATION';

export const setCodeValidated = (payload) => ({
  type: CODE_VALIDATION,
  payload,
});

const initialState = {
  isCodeValidated: true,
};

export const waitingCodeReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case CODE_VALIDATION:
      return {
        ...state,
        isCodeValidated: payload,
      };

    default:
      return state;
  }
};
