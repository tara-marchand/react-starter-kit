import React from 'react';
import ReactDOM from 'react-dom';
import L from 'leaflet';
import classNames from 'classnames';
import './../../../node_modules/leaflet/dist/leaflet.css';

// https://github.com/ryanflorence/react-training/blob/gh-pages/lessons/05-wrapping-dom-libs.md

class Map extends React.Component {
    constructor() {
        super();
        this.map = null;
        this.updateMap = this.updateMap.bind(this);
    }

    componentDidMount() {
        var node = ReactDOM.findDOMNode(this);

        L.Icon.Default.imagePath = './../../../node_modules/leaflet/src/images/marker.svg';
        this.map = L.map(node);
        new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            minZoom: 8,
            maxZoom: 12,
            attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
        }).addTo(this.map);

        // start the map in southeast England
        this.map.setView([51.3, 0.7], 1);
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.currentDoctorIndex > -1) {
            var doctorLocation = this.props.doctors[this.props.currentDoctorIndex].location;
            var lat = parseFloat(doctorLocation.geoLat);
            var long = parseFloat(doctorLocation.geoLong);

            this.map.setView([lat, long]);
        }
    }

    render() {
        var hasMapClassName = this.props.mapClassName && this.props.mapClassName.length;
        var mapClassName = (hasMapClassName) ? this.props.mapClassName : '';
        var mapClassNames = classNames({
            'map': true,
            [mapClassName]: hasMapClassName
        });

        return <div className={mapClassNames}></div>;
    }

    updateMap() {

        // L.marker([51.5, -0.09]).addTo(this.map)
        //     .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
        //     .openPopup();
    }
}

Map.propTypes = {
    currentDoctorIndex: React.PropTypes.number,
    mapClassName: React.PropTypes.string
};

export default Map;
