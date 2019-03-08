import { combineReducers } from 'redux';
import currentVideo from './currentVideo.js';
import videoList from './videoList.js';
import messagesList from './messagesList.js';

var rootReducer = combineReducers({currentVideo, videoList, messagesList});

export default rootReducer;
