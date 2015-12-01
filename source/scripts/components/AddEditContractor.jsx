var React = require('react');
var TextInput = require('./TextInput');
var Button = require('./Button');

var AddEditContractor = React.createClass({

    render: function () {
        return <div className="panel-footer">
            <TextInput placeholder="New contractor name" />
            <Button text="Add" />
        </div>
    }

});

module.exports = AddEditContractor;
