var _ = require('lodash');
var objectAssign = require('object-assign');
var Redux = require('redux');
var firebase = require('./firebase');
var contractors = require('./contractors');

/**
 * Generates a function that calls reducers with the slices of state selected
 * according to their keys and combines their results into a single object again.
 */
var rootReducer = Redux.combineReducers({
    firebase,
    contractors
});

module.exports = rootReducer;
