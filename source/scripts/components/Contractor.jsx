var React = require('react');
var ContractorStore = require('../stores/ContractorStore');
var ContractorActions = require('../actions/ContractorActions');

var Contractor = React.createClass({
    getInitialState: function () {
        return {
            viewState: 'display'
        }
    },

    render: function () {
        return <li>
            <a href={this.props.url} target="_blank" onClick={this.updateViewState}>{this.props.name} - {this.state.viewState}</a>
        </li>
    },

    updateViewState: function(e) {
        e.preventDefault();

        var newViewState = '';

        // TODO: use real logic
        switch (this.state.viewState) {
        case 'display':
            newViewState = 'edit';
            break;
        case 'edit':
            newViewState = 'display';
        case 'add':
            newViewState = 'edit';
        }
        ContractorActions.updateItemViewState(this.props.id, newViewState);
    }

});

module.exports = Contractor;
