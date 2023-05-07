import { Fragment } from 'preact';

const DonationInfo = (props) => {
	const links = props.content?.links;
	let linkItems = null;

	if (links) {
		linkItems = links.map((link) =>
			(<Fragment>
				<a href={link.url} class="uppercase text-blue md:text-lg lg:text-2xl leading-normal md:leading-normal lg:leading-normal font-HelveticaNeueLTPro-MdCn hover:underline"><span class="fas fa-envelope ml-1" />&nbsp;&nbsp;{link.name} ›</a><br />
			</Fragment>)
		);
	}

	return (
		<article>
			<div class="container mx-auto px-4 md:px-0 mb-20 -mt-24 md:-mt-36 md:mb-24 lg:mb-32">
				<div class="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-4 bg-blue py-6 md:py-12 border-b-8 border-magenta px-4 relative md:px-0">
					<div class="col-span-4 md:col-start-2 lg:col-start-2 md:col-span-7 lg:col-span-11">
						<h2 class="uppercase text-turquoise text-xl md:text-3xl lg:text-4xl leading-normal md:leading-normal lg:leading-normal font-black font-HelveticaNeueLTPro-BlkEx">{props.content?.newsletterTitle}</h2>
						<p class="text-white text-sm md:text-md lg:text-lg leading-relaxed md:leading-relaxed lg:leading-relaxed font-HelveticaNeueLTPro-Ex">{props.content?.newsletterDescription}</p>
					</div>
					<div class="col-span-4 md:col-span-2 lg:col-span-4 md:col-start-4 lg:col-start-5">
						<a href={props.content?.newsletterButtonUrl} class="block w-full bg-magenta py-3 text-white uppercase text-lg lg:text-2xl font-semibold font-HelveticaNeueLTPro-MdCn text-center">{props.content?.newsletterButton}</a>
					</div>
				</div>
				<h2 class="text-xl md:text-3xl lg:text-4xl font-black uppercase text-black mt-8 md:mt-12 mb-2 font-HelveticaNeueLTPro-BlkEx">{props.content?.title}</h2>
				{linkItems}
			</div>
		</article>
	);
};

export default DonationInfo;
