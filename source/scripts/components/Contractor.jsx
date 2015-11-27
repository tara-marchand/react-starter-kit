var React = require('react');

var Contractor = React.createClass({

    render: function () {
        return <li><a href={this.props.url} target="_blank">{this.props.name}</a></li>
    }

});

module.exports = Contractor;
