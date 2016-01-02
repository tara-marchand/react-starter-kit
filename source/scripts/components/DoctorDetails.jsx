import React from 'react';

class DoctorDetails extends React.Component {
    constructor() {
        super();
        this.currentDoctor = {
            name: '',
            speciality: '',
            location: {
                name: '',
                address: '',
                city: '',
                state: '',
                zip: ''
            }
        };
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.currentDoctorIndex !== this.props.currentDoctorIndex;
    }

    componentWillUpdate(nextProps, nextState) {
        this.currentDoctor = nextProps.doctors[nextProps.currentDoctorIndex];
    }

    render() {
        return <div className="list-group-item">
            {this.currentDoctor.name}<br />
            {this.currentDoctor.speciality}<br />
            {this.currentDoctor.location.name}<br />
            {this.currentDoctor.location.address}<br />
            {this.currentDoctor.location.city}, {this.currentDoctor.location.state} {this.currentDoctor.location.zip}
        </div>
    }
}

DoctorDetails.propTypes = {
    currentDoctorIndex: React.PropTypes.number.isRequired
};

export default DoctorDetails;
