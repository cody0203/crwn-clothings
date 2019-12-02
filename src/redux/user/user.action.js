import { userTypes } from './user.action-types';

export const setCurrentUser = user => ({
  type: userTypes.SET_CURRENT_USER,
  payload: user
});
