import React from 'react';
import { connect } from 'react-redux';
import firebaseActions from '../actions/firebase';
import doctorActions from '../actions/doctors';
import currentDoctorIndexActions from '../actions/currentDoctorIndex';
import DoctorList from '../components/DoctorList';
import AddEditDoctor from '../components/AddEditDoctor';
import Map from '../components/Map';
import DoctorDetails from '../components/DoctorDetails';

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
            <div className="container">
                <div className="row">
                    <div className="col-md-8">

                        <DoctorList doctors={this.props.doctors}
                            firebase={this.props.firebase}
                            handleNameClick={this.handleNameClick}
                        />

                    </div>
                    <div className="col-md-4">

                        <div className="list-group">

                            <Map mapClassName="list-group-item"
                                currentDoctorIndex={this.props.currentDoctorIndex}
                                doctors={this.props.doctors}
                            />

                            <DoctorDetails
                                currentDoctorIndex={this.props.currentDoctorIndex}
                                doctors={this.props.doctors}
                            />

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
        firebase: state.firebase,
        currentDoctorIndex: state.currentDoctorIndex
    };
}

/**
 * Wrap the component to inject dispatch and state into it.
 */
export default connect(mapStateToProps)(Application);;
