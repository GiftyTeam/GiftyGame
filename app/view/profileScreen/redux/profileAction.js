const {ADD_USER_CREDENTIALS} = require('./constants');

export const addUserCredentials = (payload) => ({
  type: ADD_USER_CREDENTIALS,
  payload,
});


