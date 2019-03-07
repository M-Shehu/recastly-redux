import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';

// TODO:  Create your redux store, apply thunk as a middleware, and export it!

var initialState = {
    videoList: [],
    currentVideo: null
}

let store = createStore(rootReducer, initialState, applyMiddleware(thunk));

export default store;