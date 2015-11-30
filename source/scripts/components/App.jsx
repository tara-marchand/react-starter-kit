var React = require('react');
var ContractorList = require('./ContractorList');
var AddEditContractor = require('./AddEditContractor');

var Application = React.createClass({

    render: function () {
        return <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <ContractorList />
                </div>
                <AddEditContractor />
            </div>
        </div>
    }

});

module.exports = Application;
