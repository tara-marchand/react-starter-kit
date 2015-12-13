var React = require('react');
var ContractorActions = require('../actions/contractors');
var Button = require('./Button');

var Contractor = React.createClass({

    propTypes: {
        contractor: React.PropTypes.shape({
            id: React.PropTypes.string.isRequired,
            name: React.PropTypes.string.isRequired,
            url: React.PropTypes.string,
            viewState: React.PropTypes.oneOf(['display', 'edit', 'add'])
        }).isRequired
    },

    render: function () {
        return <li className="list-group-item">
            <a href={this.props.contractor.url}
                target="_blank"
                onClick={this.props.handleNameClick}
                className={this.props.contractor.viewState}>
                    {this.props.contractor.name}
            </a>
            <Button text="Delete"
                onClick={this.props.handleDeleteButtonClick}
            />
        </li>
    }

});

module.exports = Contractor;
