var React = require('react');
var objectAssign = require('object-assign');
var ContractorActions = require('../actions/ContractorActions');
var ContractorStore = require('../stores/ContractorStore');
var Contractor = require('./Contractor');

var ContractorList = React.createClass({

    getInitialState: function() {
        var contractors = ContractorStore.getContractors();

        // extend contractors data with display-only state values
        contractors.map(function(contractor) {
            contractor.viewState = 'display';
        });

        return {
            contractors: ContractorStore.getContractors()
        }
    },

    render: function () {
        var listItems = [];
        var contractor;

        var listHtml = this.state.contractors.map(function(contractor) {
            return <Contractor key={contractor.id} contractor={contractor} />
        });

        return <div className="panel-body">
            <ul className="list-group contractor-list">
                {listHtml}
            </ul>
        </div>
    },

    componentDidMount: function() {
        ContractorStore.addChangeListener(this.onContractorsChange);
    },

    onContractorsChange: function() {
        this.setState({
            contractors: ContractorStore.getContractors()
        })
    }
});

module.exports = ContractorList;
