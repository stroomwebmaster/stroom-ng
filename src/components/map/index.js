import { Component } from 'preact';
import { Loader } from '@googlemaps/js-api-loader';

import style from './style';

export default class Map extends Component {
	initGoogleMaps() {
		const loader = new Loader({
			apiKey: 'AIzaSyCpwtaeCaBPmlYhOBOhN5GxWxERfW4hFJQ',
			version: 'weekly'
		});
		  
		loader.load().then(() => {
			const stroomLatLng = this?.props?.address?.coordinates;
			const stroomAddress = this?.props?.address?.name;

			if (!stroomLatLng || !stroomAddress) {
				return;
			}

			const map = new google.maps.Map(document.getElementById('map-canvas'), { // eslint-disable-line
				center: stroomLatLng,
				zoom: 17
			});

			new google.maps.Marker({ // eslint-disable-line
				position: stroomLatLng,
				map,
				animation: google.maps.Animation.DROP, // eslint-disable-line
				icon: {
					path: `M13.04,41.77c-0.11-1.29-0.35-3.2-0.99-5.42c-0.91-3.17-4.74-9.54-5.49-10.79c-3.64-6.1-5.46-9.21-5.45-12.07
							c0.03-4.57,2.77-7.72,3.21-8.22c0.52-0.58,4.12-4.47,9.8-4.17c4.73,0.24,7.67,3.23,8.45,4.07c0.47,0.51,3.22,3.61,3.31,8.11
							c0.06,3.01-1.89,6.26-5.78,12.77c-0.18,0.3-4.15,6.95-5.1,10.26c-0.64,2.24-0.89,4.17-1,5.48C13.68,41.78,13.36,41.78,13.04,41.77z`,
					strokeWeight: 2,
					strokeColor: '#FF00FF',
					fillColor: '#F9D9F9',
					fillOpacity: 0.5,
					anchor: new google.maps.Point(14, 43),
					labelOrigin: new google.maps.Point(14, 43)
				},
				label: {
					text: stroomAddress,
					fontWeight: 'bold',
					fontSize: '16px',
					color: '#282828'
				}
			});
		});
	}

	componentDidMount() {
		this.initGoogleMaps();
	}

	render() {
		return (
			<article class="relative z-10 h-105">
				<div class="container mx-auto px-4 md:px-0">
					<div class="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-4 pt-16 md:pt-24">
						<div class="col-span-4 md:col-start-4 md:col-span-5 lg:col-start-5 lg:col-span-8">
							<h2 class="text-xl md:text-3xl lg:text-4xl font-black uppercase text-blue mb-5 lg:mb-8 z-10 font-HelveticaNeueLTPro-BlkEx">{this.props.content?.title}</h2>
							<div id="map-canvas" class={`w-full ${style.container}`} />
							<div class={`col-span-4 md:col-start-4 md:col-span-5 lg:col-start-5 lg:col-span-8 relative left-0 bg-blue ${style.overlay}`} />
						</div>
					</div>
				</div>
			</article>
		);
	}
}
