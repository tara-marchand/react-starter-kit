var React = require('react');
var ContractorList = require('./ContractorList');
var AddEditContractor = require('./AddEditContractor');

var Application = React.createClass({

    render: function () {
        return <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <div className="panel panel-default">
                        <div className="panel-heading">Contractors</div>
                        <ContractorList />
                        <AddEditContractor />
                    </div>
                </div>
            </div>
        </div>
    }

});

module.exports = Application;
