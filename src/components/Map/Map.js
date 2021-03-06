import React from 'react';
import 'leaflet/dist/leaflet.css';
import { Map as LeafletMap, TileLayer } from 'react-leaflet';

class Map extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            lat: 61.5,
            lng: 23.766667,
            zoom: 16
        };
    }

    render() {
        const { lat, lng, zoom } = this.state;
        return (
            <LeafletMap className={this.props.className} center={[lat, lng]} zoom={zoom}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                />
            </LeafletMap>
        );
    }

}

export default Map;
