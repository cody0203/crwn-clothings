import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';
import rootReducer from './root-reducer';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './root-saga';

const sagaMiddlware = createSagaMiddleware();

const middlewares = [sagaMiddlware];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddlware.run(rootSaga);

const persistor = persistStore(store);

export { store, persistor };
