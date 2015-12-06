var React = require('react');
var ReactDOM = require('react-dom');
var Provider = require('react-redux').Provider;
var Application = require('./containers/App.jsx');
var store = require('./store');

ReactDOM.render(
    <Provider store={store}>
        <Application />
    </Provider>,
    document.getElementsByClassName('app')[0]
);
