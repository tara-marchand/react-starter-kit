var React = require('react');
var ContractorsStore = require('../stores/ContractorsStore.jsx');
var Contractor = require('./Contractor.jsx');

var ContractorList = React.createClass({

    getInitialState: function () {
        return {
            contractors: ContractorsStore.getContractors()
        }
    },

    render: function () {
        return (
            <ul>
                <Contractor />
            </ul>
        );
    }

});

module.exports = ContractorList;
