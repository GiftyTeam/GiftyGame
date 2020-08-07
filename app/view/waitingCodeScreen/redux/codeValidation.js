const MODULE_NAME = 'codeValidation';

export const selectIsCodeValidate = (state) =>
  state[MODULE_NAME].isCodeValidated;

const CODE_VALIDATION = 'CODE_VALIDATION';

export const setCodeValidated = (payload) => ({
  type: CODE_VALIDATION,
  payload,
});

const initialState = {
  isCodeValidated: false,
  hello: true,
};

console.log('Initialstate', initialState);

export const waitingCodeReducer = (state = initialState, {type, payload}) => {
  console.log('state', state);
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
