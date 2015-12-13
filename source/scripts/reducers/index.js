var _ = require('lodash');
var objectAssign = require('object-assign');
var Redux = require('redux');
var firebaseReducers = require('./firebase');
var contractorsReducers = require('./contractors');

/**
 * Generates a function that calls reducers with the slices of state selected
 * according to their keys and combines their results into a single object again.
 */
module.exports = Redux.combineReducers({
    firebaseReducers,
    contractorsReducers
});
