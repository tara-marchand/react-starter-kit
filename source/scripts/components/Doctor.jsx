import React from 'react';
import DoctorActions from '../actions/doctors';
import Button from './Button';
import Map from './Map';

class Doctor extends React.Component {
    render() {
        return <li className="list-group-item">
            <a href="#"
                target="_blank"
                onClick={this.props.handleNameClick}>
                    {this.props.doctor.name}
            </a>
        </li>
    }
}

Doctor.propTypes = {
    doctor: React.PropTypes.shape({
        photo: React.PropTypes.string.isRequired,
        name: React.PropTypes.string.isRequired,
        speciality: React.PropTypes.string.isRequired,
        location: React.PropTypes.shape({
            name: React.PropTypes.string.isRequired,
            address: React.PropTypes.string.isRequired,
            city: React.PropTypes.string.isRequired,
            state: React.PropTypes.string.isRequired,
            zip: React.PropTypes.string.isRequired,
            geoLat: React.PropTypes.string.isRequired,
            geoLong: React.PropTypes.string.isRequired
        }).isRequired
    }).isRequired
};

export default Doctor;
