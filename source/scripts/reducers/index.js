import { combineReducers } from 'redux';
import firebase from './firebase';
import doctors from './doctors';
import currentDoctorIndex from './currentDoctorIndex';

/**
 * Generates a function that calls reducers with the slices of state selected
 * according to their keys and combines their results into a single object again.
 */
var rootReducer = combineReducers({
    firebase,
    doctors,
    currentDoctorIndex
});

export default rootReducer;
