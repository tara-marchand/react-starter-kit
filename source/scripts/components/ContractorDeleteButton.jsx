var React = require('react');
var Button = require('./Button');

/**
 * Contractor delete-specific wrapper around generic Button component.
 */
var ContractorDeleteButton = React.createClass({

    propTypes: {
        onClick: React.PropTypes.func.isRequired,
        text: React.PropTypes.string.isRequired
    },

    handleClick: function() {
        this.props.onClick();
    },

    render: function () {
        return <Button text={this.props.text} onClick={this.handleClick} />
    }

});

module.exports = ContractorDeleteButton;
