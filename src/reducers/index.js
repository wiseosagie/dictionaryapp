import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import wordFormReducer from './wordFormReducer';
import WordReducer from './WordReducer'

export default combineReducers({
  auth: AuthReducer,
  wordForm: wordFormReducer,
  word: WordReducer
});
