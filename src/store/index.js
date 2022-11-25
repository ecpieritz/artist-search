import {configureStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import logger from 'redux-logger';

const composeEnhamcers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [thunk, logger]

const store = configureStore (reducers, composeEnhamcers(
  applyMiddleware (...middleware)
));

export default store