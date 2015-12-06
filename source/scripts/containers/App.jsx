var React = require('react');
var ReactRedux = require('react-redux');
var ContractorActions = require('../actions/ContractorActions');
var ContractorList = require('../components/ContractorList');
var AddEditContractor = require('../components/AddEditContractor');

var Application = React.createClass({

    render: function () {
        /**
         * `this.props` is injected by `connect` call.
         */
        var dispatch = this.props.dispatch;
        var contractors = this.props.contractors;
console.log(typeof dispatch(ContractorActions.deleteContractor(this.props.contractor.id)));
        return <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <div className="panel panel-default">
                        <div className="panel-heading">Contractors</div>
                        <ContractorList contractors={contractors}
                            handleNameClick="dispatch(ContractorActions.updateContractorViewState(this.props.contractor.id, this.props.contractor.viewState))"
                            handleDeleteButtonClick="dispatch(ContractorActions.deleteContractor(this.props.contractor.id))"
                        />
                    <AddEditContractor handleAddButtonClick="dispatch(ContractorActions.addContractor())" />
                    </div>
                </div>
            </div>
        </div>
    }

});


/**
 * Which props do we want to inject?
 */
function select(state) {
    return {
        contractors: state.contractors
    };
}

/**
 * Wrap the component to inject dispatch and state into it.
 */
module.exports = ReactRedux.connect(select)(Application);
