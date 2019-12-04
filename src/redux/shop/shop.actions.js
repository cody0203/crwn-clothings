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
  return dispatch => {
    const collectionRef = firestore.collection('collections');
    dispatch(fetchCollectionsStart());

    collectionRef
      .get()
      .then(snapshot => {
        const collectionsMap = convertCollectionsSnapshotToArray(snapshot);
        dispatch(fetchCollectionsSuccess(collectionsMap));
      })
      .catch(error => {
        dispatch(fetchCollectionsFailure(error.message));
      });
  };
};
