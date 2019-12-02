import { userTypes } from './user.action-types';

const initialState = {
  currentUser: null
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;
