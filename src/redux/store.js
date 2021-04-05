import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import thunk from "redux-thunk";

const comporeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    comporeEnhancers(applyMiddleware(thunk))
);

export default store;