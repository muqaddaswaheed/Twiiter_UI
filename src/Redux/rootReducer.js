// rootReducer.js
import { combineReducers } from 'redux';
import tweetReducer from './tweetSlice';
import followReducer from './followSlice';

const rootReducer = combineReducers({
  tweets: tweetReducer,
  follow: followReducer,
});

export default rootReducer;
