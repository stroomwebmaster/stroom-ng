import { h, Component } from "preact";
import { useEffect } from 'preact/hooks';
import { usePrerenderData } from '@preact/prerender-data-provider';
import Header from '../../components/header';
import Tiles from '../../components/tiles';
import style from "./style";

import Map from '../../components/map';
import Upcoming from '../../components/upcoming';
import Introduction from '../../components/introduction';
import Footer from '../../components/footer';
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
			
				<Footer content={prerender.data.footer} address={prerender.data.globals.address} />
			</div>
		);
	}
}
