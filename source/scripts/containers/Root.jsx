var React = require('react');
var Provider = require('react-redux').Provider;
var configureStore = require('../configureStore');
var firebaseActions = require('../actions/firebase');
var contractorActions = require('../actions/contractors');
var App = require('./App');

/**
 * Calls method to create store with initial state, with reducers
 * already passed in.
 */
var store = configureStore();

var Root = React.createClass({
    render: function() {
      return (
        <Provider store={store}>
          <App />
        </Provider>
      )
    }
});

module.exports = Root;
