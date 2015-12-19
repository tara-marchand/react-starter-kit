import React from 'react';
import objectAssign from 'object-assign';
import DoctorActions from '../actions/doctors';
import Doctor from './Doctor';
import Button from './Button';
import Spinner from './Spinner';

class DoctorList extends React.Component {
    render() {
       if (this.props.doctors) {
            var doctorsMarkup = [];
            var spinnerMarkup = '';

            for (var id in this.props.doctors) {
                if (this.props.doctors.hasOwnProperty(id)) {
                    var doctor = this.props.doctors[id];

                    doctorsMarkup.push(<Doctor key={id}
                        doctor={doctor}
                        handleNameClick={this.props.handleNameClick.bind(null, id)}
                        handleDeleteButtonClick={this.props.handleDeleteButtonClick.bind(null, id)}
                    />);
                }
            }

            if (this.props.firebase.isFetching) {
                spinnerMarkup = <Spinner isFetching={this.props.firebase.isFetching} />;
            } else {
                spinnerMarkup = '';
            }

            return <div className="panel-body">
                {spinnerMarkup}
                <ul className="list-group doctor-list">
                    {doctorsMarkup}
                </ul>
            </div>
       }
    }
}

export default DoctorList;
