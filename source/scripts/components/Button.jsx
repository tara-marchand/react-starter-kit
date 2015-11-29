var React = require('react');

var Button = React.createClass({

    render: function () {
        return <button>{this.props.text}</button>
    }

});

module.exports = Button;
