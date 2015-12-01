var React = require('react');

var Button = React.createClass({

    propTypes: {
        onClick: React.PropTypes.func.isRequired,
        text: React.PropTypes.string.isRequired
    },

    /**
     * Check whether handler was specfied in props, and if so, execute it.
     */
    handleClick: function() {
        this.props.onClick();
    },

    render: function () {
        return <button onClick={this.handleClick}>{this.props.text}</button>
    }

});

module.exports = Button;
