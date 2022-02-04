import { Component } from 'preact';
import { Loader } from '@googlemaps/js-api-loader';

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
				label: {
					text: stroomAddress,
					fontWeight: 'bold',
					fontSize: '16px',
					color: 'blue'
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
							<h2 class="text-xl md:text-3xl lg:text-4xl font-black uppercase text-blue mb-5 lg:mb-8 z-10 font-HelveticaNeueLTPro-BlkEx">Hier moet je zijn</h2>
							<div id="map-canvas" class="w-full gm-container" />
							<div class="col-span-4 md:col-start-4 md:col-span-5 lg:col-start-5 lg:col-span-8 relative left-0 bg-blue gm-overlay" />
						</div>
					</div>
				</div>
			</article>
		);
	}
}
