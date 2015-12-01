var React = require('react');
var Button = require('./Button');

/**
 * Contractor delete-specific wrapper around generic Button component.
 */
var ContractorDeleteButton = React.createClass({

    handleClick: function() {
        var onClick = this.props.onClick;

        if (onClick) {
            onClick();
        }
    },

    render: function () {
        return <Button text={this.props.text} onClick={this.handleClick} />
    }

});

module.exports = ContractorDeleteButton;
