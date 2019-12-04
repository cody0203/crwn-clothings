import { shopTypes } from './shop.types';

import {
  firestore,
  convertCollectionsSnapshotToArray
} from '../../firebase/firebase.utils';

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

export const fetchCollectionStartAsync = () => {
  return async dispatch => {
    const collectionRef = firestore.collection('collections');
    dispatch(fetchCollectionsStart());
    try {
      const snapShots = await collectionRef.get();
      const collectionsMap = convertCollectionsSnapshotToArray(snapShots);
      dispatch(fetchCollectionsSuccess(collectionsMap));
    } catch (error) {
      dispatch(fetchCollectionsFailure(error.message));
    }
  };
};
  