import React, { Component } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import { CENTER, ZOOM, MAX_ZOOM, THEME } from '../../constants/map';

export class KosiceMap extends Component {
	render() {
		return (
			<Map center={CENTER} zoom={ZOOM} maxZoom={MAX_ZOOM} zoomControl={false} attributionControl={false}>
				<TileLayer url={THEME} />
			</Map>
		);
	}
}