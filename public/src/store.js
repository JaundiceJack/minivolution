// This file creates a redux store
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const userFromStorage = localStorage.getItem('minivolutionUser') ?
  JSON.parse(localStorage.getItem('minivolutionUser')) : {};

// Load stuff from the storage into the initial states
const initialState = {
  //user: { user: userFromStorage },
};

const middleware = [thunk];

const store = createStore(rootReducer, initialState,
  compose( applyMiddleware(...middleware), compose ));

export default store;
