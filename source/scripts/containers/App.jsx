import React from 'react';
import { connect } from 'react-redux';
import firebaseActions from '../actions/firebase';
import contractorActions from '../actions/contractors';
import ContractorList from '../components/ContractorList';
import AddEditContractor from '../components/AddEditContractor';

class Application extends React.Component {
    constructor() {
        super();
        this.handleNameClick = this.handleNameClick.bind(this);
        this.handleDeleteButtonClick = this.handleDeleteButtonClick.bind(this);
        this.handleAddButtonClick = this.handleAddButtonClick.bind(this);
    }

    /**
     * -- Event handlers --
     */

    /**
     * Value for index is passed from grandchild: Contractor -> ContractorList -> App
     */
    handleNameClick(id, e) {
        e.preventDefault();
        this.props.dispatch(contractorActions.updateContractorViewState(id));
    }

    /**
     * Value for index is passed from grandchild: Contractor -> ContractorList -> App
     */
    handleDeleteButtonClick(index, e) {
        e.preventDefault();
        this.props.dispatch(contractorActions.deleteContractor(index));
    }

    handleAddButtonClick() {
        //console.log('handleAddButtonClick');
    }

    /**
     * -- Lifecycle methods --
     */

    componentDidMount() {
        this.props.dispatch(contractorActions.listenForFirebaseChanges());
    }

    render() {
        /**
         * `this.props` is injected by `connect` call.
         */
        var dispatch = this.props.dispatch;

        return (
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='panel panel-default'>
                            <div className='panel-heading'>Contractors!</div>
                            <ContractorList contractors={this.props.contractors}
                                firebase={this.props.firebase}
                                handleNameClick={this.handleNameClick}
                                handleDeleteButtonClick={this.handleDeleteButtonClick}
                            />
                        <AddEditContractor handleAddButtonClick={this.handleAddButtonClick} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}


/**
 * Which props do we want to inject?
 */
function mapStateToProps(state) {
    return {
        contractors: state.contractors,
        firebase: state.firebase
    };
}

/**
 * Wrap the component to inject dispatch and state into it.
 */
export default connect(mapStateToProps)(Application);;
