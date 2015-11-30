var React = require('react');
var ContractorActions = require('../actions/ContractorActions');
var ContractorStore = require('../stores/ContractorStore');

var Contractor = React.createClass({

    render: function () {
        return <li>
            <a href={this.props.contractor.url} target="_blank" onClick={this.updateItemViewState}>
                {this.props.contractor.name} - {this.props.contractor.viewState}
            </a>
        </li>
    },

    updateItemViewState: function(e) {
        e.preventDefault();

        ContractorActions.updateItemViewState(this.props.contractor.id, this.props.contractor.viewState);
    }

});

module.exports = Contractor;
