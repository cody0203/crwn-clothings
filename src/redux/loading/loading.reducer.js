import { shopTypes } from '../shop/shop.types';

const initialState = {
  isLoading: false
};

const loadingTypes = [shopTypes.FETCH_COLLECTION_START];
const loadedTypes = [
  shopTypes.FETCH_COLLECTION_FAILURE,
  shopTypes.FETCH_COLLECTION_SUCCESS
];

const loadingReducer = (state = initialState, action) => {
  if (loadingTypes.includes(action.type)) {
    console.log(true);
    return {
      ...state,
      isLoading: true
    };
  } else if (loadedTypes.includes(action.type)) {
    console.log(false);
    return {
      ...state,
      isLoading: false
    };
  }
  return state;
};

export default loadingReducer;
