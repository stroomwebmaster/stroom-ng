import { usePrerenderData } from '@preact/prerender-data-provider';

import Footer from '../../components/footer';
import Header from '../../components/header';
import Introduction from '../../components/introduction';
import DonationTiles from '../../components/donationtiles';
import DonationInfo from '../../components/donationinfo';
import About from '../../components/about';

const Donation = (props) => {
	const [prerender] = usePrerenderData(props);

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
};

export default Donation;
