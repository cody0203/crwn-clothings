import { put, call, takeLatest, all } from 'redux-saga/effects';

import { userTypes } from '../user/user.types';
import { clearCart } from './cart.action';

function* clearCartOnSignOut() {
  yield put(clearCart());
}

function* onSignOutSuccess() {
  yield takeLatest(userTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* cartSagas() {
  yield all([call(onSignOutSuccess)]);
}
