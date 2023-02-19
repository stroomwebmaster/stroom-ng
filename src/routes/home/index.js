import { Component } from 'preact';
import { usePrerenderData } from '@preact/prerender-data-provider';

import Footer from '../../components/footer';
import Header from '../../components/header';
import Introduction from '../../components/introduction';
import Map from '../../components/map';
import Venue from '../../components/venue';
import Tiles from '../../components/tiles';
import Upcoming from '../../components/upcoming';
import Activities from '../../components/activities';
export default class Home extends Component {
	componentDidMount() {

		/*
		* Netlify CMS's accept invite link land on home page.
		* This redirection takes it to the right place(/admin).
		*/

		if (window !== undefined && window.location.href.includes('#invite_token')) {
			const { href } = window.location;
			window.location.href= `${href.substring(0, href.indexOf('#'))}admin${href.substring(href.indexOf('#'))}`;
		}
	}

	render() {
		const [prerender] = usePrerenderData(this.props);

		return (
			<div>
				<Header content={prerender.data.globals.header} address={prerender.data.globals.address} />
				
				<Introduction content={prerender.data.introduction} />

				<Upcoming content={prerender.data.upcoming} />
			
				<Tiles content={prerender.data.tiles} />

				<Map content={prerender.data.map} address={prerender.data.globals.address} />

				<Venue content={prerender.data.venue} />

				<Activities content={prerender.data.activities} />
			
				<Footer content={prerender.data.globals.footer} address={prerender.data.globals.address} />
			</div>
		);
	}
}
