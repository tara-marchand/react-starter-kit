var React = require('react');
var ContractorActions = require('../actions/ContractorActions');
var ContractorStore = require('../stores/ContractorStore');
var ContractorDeleteButton = require('./ContractorDeleteButton');
var Button = require('./Button');

var Contractor = React.createClass({

    propTypes: {
        contractor: React.PropTypes.shape({
            id: React.PropTypes.number.isRequired,
            name: React.PropTypes.string.isRequired,
            url: React.PropTypes.string,
            viewState: React.PropTypes.oneOf(['display', 'edit', 'add']).isRequired
        }).isRequired
    },

    render: function () {
        return <li className="list-group-item">
            <a href={this.props.contractor.url} target="_blank" onClick={this.updateViewState} className={this.props.contractor.viewState}>
                {this.props.contractor.name}
            </a>
            <ContractorDeleteButton text="Delete" onClick={this.deleteThis} />
        </li>
    },

    updateViewState: function(e) {
        e.preventDefault();

        ContractorActions.updateContractorViewState(this.props.contractor.id, this.props.contractor.viewState);
    },

    deleteThis: function() {
        ContractorActions.deleteContractor(this.props.contractor.id);
    }

});

module.exports = Contractor;
