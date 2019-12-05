import { shopTypes } from './shop.types';

export const fetchCollectionsStart = () => {
  return {
    type: shopTypes.FETCH_COLLECTION_START
  };
};

export const fetchCollectionsSuccess = collections => ({
  type: shopTypes.FETCH_COLLECTION_SUCCESS,
  payload: collections
});

export const fetchCollectionsFailure = errorMessage => {
  return {
    type: shopTypes.FETCH_COLLECTION_FAILURE,
    payload: errorMessage
  };
};
