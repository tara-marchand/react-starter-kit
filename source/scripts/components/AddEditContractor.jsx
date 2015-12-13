var React = require('react');
var TextInput = require('./TextInput');
var Button = require('./Button');

var AddEditContractor = React.createClass({

    handleClick: function() {
        return;
    },

    render: function () {
        return (
            <div className="panel-footer">
                <TextInput placeholder="New contractor name" />
            <Button text="Add" onClick={this.props.handleAddButtonClick} />
            </div>
        );
    }

});

module.exports = AddEditContractor;
