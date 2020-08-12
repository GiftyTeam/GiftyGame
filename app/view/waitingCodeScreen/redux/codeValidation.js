export const selectIsCodeValidate = (state) =>
state.waitingCodeReducer.isCodeValidated;

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

export default function waitingCodeReducer(
  state = initialState,
  {type, payload},
) {
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
}
