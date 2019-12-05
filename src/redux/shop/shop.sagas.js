import { call, put, takeLatest } from 'redux-saga/effects';
import { shopTypes } from './shop.types';

import {
  firestore,
  convertCollectionsSnapshotToArray
} from '../../firebase/firebase.utils';

import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure
} from './shop.actions';

export function* fetchCollectionsAsync() {
  const collectionRef = firestore.collection('collections');

  try {
    // Yield to async/await get snapshot from collectionRef using .get()
    const snapShots = yield collectionRef.get();

    // Yield call will invoke a function with 2 paramter.
    // First is our function want to invoke, second is paramter want to pass into our function
    const collectionsMap = yield call(
      convertCollectionsSnapshotToArray,
      snapShots
    );
    // Using put() effect to dispatch an action
    // Wrote like dispatch in this case
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(shopTypes.FETCH_COLLECTION_START, fetchCollectionsAsync);
}
