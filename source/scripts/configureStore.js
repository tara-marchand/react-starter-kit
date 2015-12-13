var Redux = require('redux');
var Thunk = require('redux-thunk');
var rootReducer = require('./reducers');

/**
 * Create a store that has redux-thunk middleware enabled.
 */
var createStoreWithMiddleware = Redux.applyMiddleware(
    Thunk
)(Redux.createStore);


var configureStore = function (initialState) {
    return createStoreWithMiddleware(rootReducer, initialState);
};

module.exports = configureStore;
