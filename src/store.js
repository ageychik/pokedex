import { createStore, applyMiddleware } from 'redux'

import reducer from './redux'
import { composeWithDevTools } from 'redux-devtools-extension';

import createSagaMiddleware from 'redux-saga'
import {sagaWatcher} from './sagas/index'
const saga = createSagaMiddleware();

export const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(saga))

);

saga.run(sagaWatcher);