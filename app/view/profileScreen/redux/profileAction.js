import {
  getUserExtraDataFetch,
  createUserExtraDataFetch,
} from '../../../modules/API';

const {ADD_USER_CREDENTIALS} = require('./constants');

export const addUserCredentials = (payload) => ({
  type: ADD_USER_CREDENTIALS,
  payload,
});

export const getUserData = () => async (dispatch) => {
  try {
    const USERDATA = await getUserExtraDataFetch();
    console.log('USERDATA', USERDATA);
    console.log('dispatch', dispatch);
  } catch (error) {
    console.log(error);
  }
};

export const addNewUser = (userData) => async (dispatch) => {
  try {
    const response = await createUserExtraDataFetch(userData);
    console.log('response', response);
    console.log('userData', userData);
    dispatch(
      addUserCredentials(
        userData,
      ),
      );
      console.log('dispatch', dispatch);
  } catch (error) {
    console.log(error);
  }
};
