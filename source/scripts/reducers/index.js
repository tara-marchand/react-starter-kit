import { combineReducers } from 'redux';
import firebase from './firebase';
import contractors from './contractors';

/**
 * Generates a function that calls reducers with the slices of state selected
 * according to their keys and combines their results into a single object again.
 */
var rootReducer = combineReducers({
    firebase,
    contractors
});

export default rootReducer;
