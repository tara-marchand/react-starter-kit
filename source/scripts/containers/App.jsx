var React = require('react');
var ReactRedux = require('react-redux');
var ContractorActions = require('../actions/ContractorActions');
var ContractorList = require('../components/ContractorList');
var AddEditContractor = require('../components/AddEditContractor');

var Application = React.createClass({

    /**
     * Value for index is passed from grandchild: Contractor -> ContractorList -> App
     */
    handleNameClick: function (index, e) {
        e.preventDefault();
        this.props.dispatch(ContractorActions.updateContractorViewState(index));
    },

    /**
     * Value for index is passed from grandchild: Contractor -> ContractorList -> App
     */
    handleDeleteButtonClick: function (index, e) {
        e.preventDefault();
        this.props.dispatch(ContractorActions.deleteContractor(index));
    },

    handleAddButtonClick: function () {
        //console.log('handleAddButtonClick');
    },

    handleLoadContractorsClick: function () {
        this.props.dispatch(ContractorActions.fetchContractors());
    },

    componentDidMount() {
        this.props.dispatch(ContractorActions.fetchContractorsIfNeeded());
    },

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        // this.props.dispatch(ContractorActions.fetchContractorsIfNeeded());
    },

    render: function () {
        /**
         * `this.props` is injected by `connect` call.
         */
        var dispatch = this.props.dispatch;
        var contractors = this.props.contractors;

        return <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <div className="panel panel-default">
                        <div className="panel-heading">Contractors</div>
                        <ContractorList contractors={contractors}
                            handleNameClick={this.handleNameClick}
                            handleDeleteButtonClick={this.handleDeleteButtonClick}
                            handleLoadContractorsClick={this.handleLoadContractorsClick}
                        />
                    <AddEditContractor handleAddButtonClick={this.handleAddButtonClick} />
                    </div>
                </div>
            </div>
        </div>
    }

});


/**
 * Which props do we want to inject?
 */
function mapStateToProps(state) {
    return {
        contractors: state.contractors
    };
}

/**
 * Wrap the component to inject dispatch and state into it.
 */
module.exports = ReactRedux.connect()(Application);
