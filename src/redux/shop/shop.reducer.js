import { shopTypes } from './shop.types';

const initialState = {
  collections: null,
  isFetching: false,
  errorMessage: ''
};

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case shopTypes.FETCH_COLLECTION_START:
      return { ...state, isFetching: true };
    case shopTypes.FETCH_COLLECTION_SUCCESS:
      return { ...state, collections: action.payload, isFetching: false };
    case shopTypes.FETCH_COLLECTION_FAILURE:
      return { ...state, isFetching: false, errorMessage: action.payload };
    default:
      return state;
  }
};

export default shopReducer;
