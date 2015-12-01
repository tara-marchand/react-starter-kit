var React = require('react');

var TextInput = React.createClass({

    propTypes: {
        placeholder: React.PropTypes.string,
        value: React.PropTypes.string
    },

    render: function () {
        return <input type="text" placeholder={this.props.placeholder} value={this.props.value} />
    }

});

module.exports = TextInput;
