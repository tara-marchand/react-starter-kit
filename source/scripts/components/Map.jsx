import React from 'react';
import ReactDOM from 'react-dom';
import L from 'leaflet';
import classNames from 'classnames';
import './../../../node_modules/leaflet/dist/leaflet.css';

// https://github.com/ryanflorence/react-training/blob/gh-pages/lessons/05-wrapping-dom-libs.md

class Map extends React.Component {
    constructor() {
        super();
        // defaults
        this.map = null;
        this.icon = L.divIcon({
            iconSize: new L.Point(25, 41)
        });
        this.currentDoctor = {
            name: '',
            location: {
                name: '',
                address: '',
                city: '',
                state: '',
                zip: '',
                geoLat: 51.3,
                geoLong: 0.7
            }
        };

        this.updateMapView = this.updateMapView.bind(this);
    }

    componentDidMount() {
        var node = ReactDOM.findDOMNode(this);

        L.Icon.Default.imagePath = './../../../node_modules/leaflet/dist/images';
        this.map = L.map(node);
        this.map.setView([ this.currentDoctor.location.geoLat, this.currentDoctor.location.geoLong ], 1);
        new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            minZoom: 8,
            maxZoom: 12,
            attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
        }).addTo(this.map);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.currentDoctorIndex !== this.props.currentDoctorIndex;
    }

    componentWillUpdate(nextProps, nextState) {
        this.currentDoctor = nextProps.doctors[nextProps.currentDoctorIndex];
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.currentDoctorIndex > -1) {
            this.updateMapView();
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

    updateMapView() {
        var latLong = [
            this.currentDoctor.location.geoLat,
            this.currentDoctor.location.geoLong
        ];

        this.map.panTo(latLong);
        L.marker(latLong, { icon: this.icon })
            .addTo(this.map)
            .bindPopup(this.currentDoctor.name)
            .openPopup();
    }
}

Map.propTypes = {
    currentDoctorIndex: React.PropTypes.number,
    mapClassName: React.PropTypes.string
};

export default Map;
