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

            for (var i in this.props.doctors) {
                var doctor = this.props.doctors[i];

                doctorsMarkup.push(<Doctor key={i}
                    doctor={doctor}
                    handleNameClick={this.props.handleNameClick.bind(null, i)}
                />);
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
