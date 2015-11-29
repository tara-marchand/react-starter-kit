var React = require('react');

var TextInput = React.createClass({

    render: function () {
        return <input type="text" placeholder={this.props.placeholder} value={this.props.value} />
    }

});

module.exports = TextInput;
