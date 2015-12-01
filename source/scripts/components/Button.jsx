var React = require('react');

var Button = React.createClass({

    /**
     * Check whether handler was specfied in props, and if so, execute it.
     */
    handleClick: function() {
        var onClick = this.props.onClick;

        if (onClick) {
            onClick();
        }
    },

    render: function () {
        return <button onClick={this.handleClick}>{this.props.text}</button>
    }

});

module.exports = Button;
