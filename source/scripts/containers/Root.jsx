var React = require('react');
var Provider = require('react-redux').Provider;
var configureStore = require('../configureStore');
var App = require('./App');

/**
 * Calls method to create store with initial state, with reducers
 * already passed in.
 */
var store = configureStore();

var Root = React.createClass({
    render() {
      return (
        <Provider store={store}>
          <App />
        </Provider>
      )
    }
});

module.exports = Root;
