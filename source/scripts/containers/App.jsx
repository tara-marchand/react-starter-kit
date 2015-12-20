import React from 'react';
import { connect } from 'react-redux';
import firebaseActions from '../actions/firebase';
import doctorActions from '../actions/doctors';
import currentDoctorIndexActions from '../actions/currentDoctorIndex';
import DoctorList from '../components/DoctorList';
import AddEditDoctor from '../components/AddEditDoctor';
import Map from '../components/Map';

class Application extends React.Component {
    constructor() {
        super();
        this.handleNameClick = this.handleNameClick.bind(this);
        this.handleAddButtonClick = this.handleAddButtonClick.bind(this);
    }

    /**
     * Value for index is passed from grandchild: Doctor -> DoctorList -> App
     */
    handleNameClick(index, e) {
        e.preventDefault();
        this.props.dispatch(currentDoctorIndexActions.setIndex(index));
    }

    handleAddButtonClick() {
        //console.log('handleAddButtonClick');
    }

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
                            />

                            <Map currentDoctorIndex={this.props.currentDoctorIndex}
                                doctors={this.props.doctors}
                            />

                            <AddEditDoctor handleAddButtonClick={this.handleAddButtonClick} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

Application.defaultProps = {
    currentDoctorIndex: -1
};

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
