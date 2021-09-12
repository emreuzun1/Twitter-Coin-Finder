import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers';
import rootSaga from './sagas';
import {composeWithDevTools} from 'redux-devtools-extension';
import createSagaMiddleware from '@redux-saga/core';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;

export {store};
