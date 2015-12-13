var Redux = require('redux');
var Thunk = require('redux-thunk');
var ContractorReducers = require('./reducers/ContractorReducers');

/**
 * Create a store that has redux-thunk middleware enabled.
 */
var createStoreWithMiddleware = Redux.applyMiddleware(
    Thunk
)(Redux.createStore);

var configureStore = function (initialState) {
    return createStoreWithMiddleware(ContractorReducers, initialState);
};

module.exports = configureStore;
