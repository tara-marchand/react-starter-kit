var React = require('react');
var Provider = require('react-redux').Provider;
var configureStore = require('../configureStore');
var App = require('./App');

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
