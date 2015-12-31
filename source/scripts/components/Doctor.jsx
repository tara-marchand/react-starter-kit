import React from 'react';
import DoctorActions from '../actions/doctors';
import Button from './Button';
import Map from './Map';
import TweenLite from 'gsap';

class Doctor extends React.Component {
    render() {
        return <a href="#"
            className="list-group-item"
            target="_blank"
            onClick={this.props.handleNameClick}
            onMouseOver={this.handleMouseOver}
            onMouseOut={this.handleMouseOut}>
                {this.props.doctor.name}
        </a>
    }

    handleMouseOver(e) {
        var tween = TweenLite.to(e.target, .5, {
            opacity: .5
        });
    }

    handleMouseOut(e) {
        var tween = TweenLite.to(e.target, .5, {
            opacity: 1
        });
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
