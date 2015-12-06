var React = require('react');

var Button = React.createClass({

    propTypes: {
        onClick: React.PropTypes.func.isRequired,
        text: React.PropTypes.string.isRequired
    },

    render: function () {
        return <button onClick={this.props.onClick}>{this.props.text}</button>
    }

});

module.exports = Button;
