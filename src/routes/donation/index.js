import { Component } from 'preact';
import { usePrerenderData } from '@preact/prerender-data-provider';

import Footer from '../../components/footer';
import Header from '../../components/header';
import Introduction from '../../components/introduction';
import DonationTiles from '../../components/donationtiles';
import DonationInfo from '../../components/donationinfo';
import About from '../../components/about';

export default class Donation extends Component {
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
				<Header content={prerender.data.header} />

				<Introduction content={prerender.data.introduction} />

				<DonationTiles content={prerender.data.donation} />

				<DonationInfo content={prerender.data.info} />

				<About content={prerender.data.about} />

				<Footer content={prerender.data.globals.footer} faq={prerender.data.footer.faq} />
			</div>
		);
	}
}
