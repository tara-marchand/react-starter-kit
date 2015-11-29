var React = require('react');
var ContractorStore = require('../stores/ContractorStore');
var Contractor = require('./Contractor');

var ContractorList = React.createClass({
    getInitialState: function() {
        return {
            contractors: ContractorStore.getContractors()
        }
    },

    render: function () {
        var listItems = [];

        for (var i = 0, contractor; i < this.props.contractors.length; i++) {
            contractor = this.props.contractors[i];
            listItems.push(<Contractor key={contractor.id} name={contractor.name} url={contractor.url} />);
        }

        return (
            <ul>
                {listItems}}
            </ul>
        );
    }

});

module.exports = ContractorList;
