import {MODAL} from './constants';

export const ModalVisible = (value) => {
  return {
    type: 'MODAL',
    payload: value,
  };
};
