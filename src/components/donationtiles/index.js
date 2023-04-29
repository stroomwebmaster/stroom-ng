import { Fragment } from 'preact';

const DonationTiles = (props) => (
	<Fragment>
		<article class="bg-coal -z-10">
			<div class="container mx-auto px-4 md:px-0">
				<div class="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-4 pt-12 md:pt-16 pb-8 md:pb-12">
					<div class="col-span-4 md:col-span-8 lg:col-span-12">
						<h2 class="text-xl md:text-3xl lg:text-4xl font-black uppercase text-magenta md:mb-12 font-HelveticaNeueLTPro-BlkEx">{props.content?.titleStart}<span class="text-white">{props.content?.titleMiddle}</span>{props.content?.titleEnd}</h2>
					</div>
				</div>
			</div>
		</article>
		<article class="bg-coal relative pb-24 md:pb-36">
			<div class="container mx-auto px-4 md:px-0">
				<div class="grid grid-cols-4 md:grid-cols-12 gap-4 relative pb-16 lg:pb-24">		
					<div class="col-span-4 bg-orange border-b-8 border-turquoise md:mb-8 lg:mb-12 z-10 md:px-8 text-center">
						<p class="text-red-outline text-xl md:text-2xl lg:text-4xl leading-normal md:leading-normal lg:leading-normal my-4 md:my-8 font-black uppercase font-HelveticaNeueLTPro-BlkExO">{props.content?.tileOne?.title}</p>
						<a href={props.content?.tileThree?.buttonUrl} class="text-red text-base md:text-lg mb-4 lg:text-3xl leading-normal md:leading-normal lg:leading-normal font-HelveticaNeueLTPro-Ex hover:underline">{props.content?.tileOne?.buttonText} ›</a>
					</div>
			
					<div class="col-span-4 bg-blue border-b-8 border-lila md:mt-8 lg:mt-12 z-10 md:px-8 text-center">
						<p class="text-turquoise text-xl md:text-2xl lg:text-4xl leading-normal md:leading-normal lg:leading-normal my-4 md:my-8 font-black uppercase font-HelveticaNeueLTPro-BlkExO">{props.content?.tileTwo?.title}</p>
						<a href={props.content?.tileThree?.buttonUrl} class="text-turquoise text-base md:text-lg mb-4 lg:text-3xl leading-normal md:leading-normal lg:leading-normal font-HelveticaNeueLTPro-Ex hover:underline">{props.content?.tileTwo?.buttonText} ›</a>
					</div>
			
					<div class="col-span-4 bg-magenta border-b-8 border-orange md:mb-8 lg:mb-12 z-10 md:px-8 text-center">
						<p class="text-white text-xl md:text-2xl lg:text-4xl leading-normal md:leading-normal lg:leading-normal my-4 md:my-8 font-black uppercase font-HelveticaNeueLTPro-BlkExO">{props.content?.tileThree?.title}</p>
						<a href={props.content?.tileThree?.buttonUrl} class="text-white text-base md:text-lg mb-4 lg:text-3xl leading-normal md:leading-normal lg:leading-normal font-HelveticaNeueLTPro-Ex hover:underline">{props.content?.tileThree?.buttonText} ›</a>
					</div>
					<div class="col-span-4 md:col-span-12 text-right">
						<a href={props.content?.secondaryButtonUrl} class="uppercase text-white md:text-lg lg:text-2xl leading-normal md:leading-normal lg:leading-normal font-HelveticaNeueLTPro-MdCn hover:underline">{props.content?.secondaryButtonText} ›</a><br />
					</div>
				</div>
				
			</div>
		</article>
	</Fragment>
);

export default DonationTiles;
