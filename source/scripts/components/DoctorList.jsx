import React from 'react';
import objectAssign from 'object-assign';
import DoctorActions from '../actions/doctors';
import Doctor from './Doctor';
import Pagination from './Pagination';
import Button from './Button';
import Spinner from './Spinner';

class DoctorList extends React.Component {
    render() {
       if (this.props.doctors) {
            var doctorsLength = Object.keys(this.props.doctors).length;
            var ITEMS_PER_PAGE = 9;
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

            return <div>
                {spinnerMarkup}
                <div className="list-group doctor-list">
                    {doctorsMarkup}
                </div>
                <Pagination itemsPerPage={ITEMS_PER_PAGE} itemsTotal={doctorsLength} />
            </div>
       }
    }
}

export default DoctorList;
