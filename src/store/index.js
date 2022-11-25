import {legacy_createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import logger from 'redux-logger';

const composeEnhamcers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [thunk, logger]

const store = legacy_createStore (reducers, composeEnhamcers(
  applyMiddleware (...middleware)
));

export default store