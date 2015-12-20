import React from 'react';
import L from 'leaflet';
import './../../../node_modules/leaflet/dist/leaflet.css';

class Map extends React.Component {
    constructor() {
        super();
        this.map = null;
        this.updateMap = this.updateMap.bind(this);
    }

    render() {
        return <div id="map">{this.props.currentDoctorIndex}</div>;
    }

    updateMap() {
        this.map = L.map('map');
        this.map.setView([
            this.props.doctors[this.props.currentDoctorIndex],
            this.props.doctors[this.props.currentDoctorIndex]
            ],
        13);
    }

    componentDidMount() {
        if (this.props.currentDoctorIndex > -1) {
            // this.updateMap();
        }
    }
}

Map.propTypes = {
};

export default Map;
