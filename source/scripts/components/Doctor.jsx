import React from 'react';
import DoctorActions from '../actions/doctors';
import Button from './Button';

class Doctor extends React.Component {
    render() {
        return <li className="list-group-item">
            <a href={this.props.doctor.url}
                target="_blank"
                onClick={this.props.handleNameClick}
                className={this.props.doctor.viewState}>
                    {this.props.doctor.name}
            </a>
            <Button text="Delete"
                onClick={this.props.handleDeleteButtonClick}
            />
        </li>
    }
}

Doctor.propTypes = {
    doctor: React.PropTypes.shape({
        id: React.PropTypes.string.isRequired,
        name: React.PropTypes.string.isRequired,
        url: React.PropTypes.string,
        viewState: React.PropTypes.oneOf(['display', 'edit', 'add'])
    }).isRequired
};

Doctor.defaultProps = {
    viewState: 'display'
};

/*
 - photo
 - name (Dr. Pragya Jain)
 - dr. type (Internal Medicine)
 - location name (Dignity Health Medical Group - Sequoia)
 - location # and street (1660 San Carlos Ave)
 - location city and zip (San Carlos, 94070)
 - phone # ((650) 596-9085)
 */

export default Doctor;
