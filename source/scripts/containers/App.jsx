import React from 'react';
import { connect } from 'react-redux';
import firebaseActions from '../actions/firebase';
import doctorActions from '../actions/doctors';
import DoctorList from '../components/DoctorList';
import AddEditDoctor from '../components/AddEditDoctor';

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
     * Value for index is passed from grandchild: Doctor -> DoctorList -> App
     */
    handleNameClick(id, e) {
        e.preventDefault();
        this.props.dispatch(doctorActions.updateDoctorViewState(id));
    }

    /**
     * Value for index is passed from grandchild: Doctor -> DoctorList -> App
     */
    handleDeleteButtonClick(index, e) {
        e.preventDefault();
        this.props.dispatch(doctorActions.deleteDoctor(index));
    }

    handleAddButtonClick() {
        //console.log('handleAddButtonClick');
    }

    /**
     * -- Lifecycle methods --
     */

    componentDidMount() {
        this.props.dispatch(doctorActions.listenForFirebaseChanges());
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
                            <div className='panel-heading'>Doctors!</div>
                            <DoctorList doctors={this.props.doctors}
                                firebase={this.props.firebase}
                                handleNameClick={this.handleNameClick}
                                handleDeleteButtonClick={this.handleDeleteButtonClick}
                            />
                        <AddEditDoctor handleAddButtonClick={this.handleAddButtonClick} />
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
        doctors: state.doctors,
        firebase: state.firebase
    };
}

/**
 * Wrap the component to inject dispatch and state into it.
 */
export default connect(mapStateToProps)(Application);;
