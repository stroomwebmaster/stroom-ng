import { h, Component } from "preact";
import { useEffect } from 'preact/hooks';
import { usePrerenderData } from '@preact/prerender-data-provider';
import Header from '../../components/header';
import Tiles from '../../components/tiles';
import style from "./style";

import Map from '../../components/map';
import Upcoming from '../../components/upcoming';
export default class Home extends Component {
	constructor(props) {
		super(props);
		const date = new Date();
		this.state = { year: date.getFullYear() };
	}

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
				<Header address={prerender.data.globals.address} />
				<div class="-mb-12">
					<div class="container mx-auto">
						<div class="px-4 md:px-0">
							<div class="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-4 relative">
								<div class="dotted-red absolute w-1/2 h-full-dots-top -top-6 md:-top-12 -right-24 md:-right-40" />
								<div class="col-span-3 md:col-start-2 lg:col-start-2 md:col-span-4 lg:col-span-6 my-12 md:mt-24 md:mb-20 lg:mb-40">
									<p class="text-coal text-sm md:text-lg lg:text-2xl leading-relaxed md:mb-8 font-HelveticaNeueLTPro-Ex pl-4">
										Stroom verbindt ambitie, stad en traditie. Wentelt zich te vaak in ironie en te weinig in het heilige.
										Stroom bevraagt, belijdt en bijbelt. Kritisch, confronterend en relevant.
										Stroom is gemeenschap. Stroom is ernst. Stroom zoekt naar goed nieuws voor Amsterdam.
									</p>
								</div>
							</div>
						</div>
						<form 
							action="https://stroomamsterdam.us17.list-manage.com/subscribe/post?u=79f9dab6aa872630f9b994fcd&amp;id=10c844441b"
							class="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-4 bg-blue py-6 md:py-12 border-b-8 border-magenta px-4 relative md:px-0 mx-4 md:mx-0"
							method="post" 
							target="_blank" 
							novalidate>
							<div class="col-span-4 md:col-start-2 lg:col-start-2 md:col-span-7 lg:col-span-11">
								<h2 class="uppercase text-turquoise text-xl md:text-3xl lg:text-4xl font-black font-HelveticaNeueLTPro-BlkEx">Nieuwsbrief</h2>
							</div>
							<div class="col-span-4 md:col-start-2 lg:col-start-2 md:col-span-4 lg:col-span-7">
								<input type="email" value="" name="EMAIL" id="mce-EMAIL" class="w-full h-12 md:h-full px-3 text-sm md:text-lg lg:text-2xl" />
							</div>
							<div class="col-span-4 md:col-span-2 lg:col-span-3">
								<input type="submit" class="w-full bg-magenta py-3 text-white uppercase text-lg lg:text-2xl font-semibold font-HelveticaNeueLTPro-MdCn cursor-pointer" value="Schrijf je in" />
							</div>
						</form>
					</div>
				</div>
				<Upcoming upcoming={prerender.data.upcoming} />
			
				<Tiles />

				<Map address={prerender.data.globals.address} />
			
				<article class="bg-coal">
					<div class="bg-coal -top-6 md:top-0 -mb-12 relative overflow-x-hidden">
						<div class="container mx-auto px-4 md:px-0">
							<div class="grid md:grid-cols-8 lg:grid-cols-12 gap-4 pt-20 md:pt-40">
								<div class="col-span-4 md:col-span-7 md:col-start-2 lg:col-span-11 lg:col-start-2">
									<h2 class="text-xl md:text-3xl lg:text-4xl font-black uppercase text-magenta my-6 lg:my-12 font-HelveticaNeueLTPro-BlkEx">Connect</h2>
								</div>
								<div class="col-span-4 md:col-span-4 lg:col-span-5 relative grid md:grid-cols-4 lg:grid-cols-5">
									<div class="md:hidden w-screen border-t-4 border-l-4 border-b-4 border-lila rounded-l-2xl pt-12 pb-24 lg:pb-32 text-right absolute left-100% top-0" />
									<div class="w-screen border-t-4 border-r-4 border-b-4 border-lila rounded-r-2xl pt-12 pb-24 lg:pb-32 text-right absolute right-5% md:right-0 top-0" />
									<div class="md:col-start-2 md:col-span-3 lg:col-start-2 lg:col-span-4 pt-12 z-10">
										<a href="https://www.facebook.com/groups/STROOMAmsterdam" target="_blank" rel="noreferrer noopener" class="block uppercase text-white md:text-lg lg:text-2xl font-HelveticaNeueLTPro-MdCn"><span class="fab fa-facebook-square ml-1" />&nbsp;&nbsp;<span class="hover:underline">Facebookgroep</span> &#x9b;</a>
										<a href="mailto:jezus@stroomamsterdam.nl" class="md:hidden uppercase text-white md:text-lg lg:text-2xl font-HelveticaNeueLTPro-MdCn"><span class="fas fa-envelope ml-1" />>&nbsp;&nbsp;<span class="hover:underline">jezus@stroomamsterdam.nl</span> &#x9b;</a>
									</div>
								</div>
								<div class="md:col-span-4 lg:col-span-7 relative md:grid md:grid-cols-4 lg:grid-cols-5 hidden">
									<div class="w-screen border-t-4 border-l-4 border-b-4 border-lila rounded-l-2xl pt-12 pb-24 lg:pb-32 text-right absolute left-0 top-0" />
									<div class="md:col-start-2 md:col-span-3 lg:col-start-2 lg:col-span-4 pt-12 z-10">
										<a href="mailto:jezus@stroomamsterdam.nl" aria-hidden="true" class="uppercase text-white md:text-lg lg:text-2xl font-HelveticaNeueLTPro-MdCn"><span class="fas fa-envelope" />&nbsp;&nbsp;<span class="hover:underline">jezus@stroomamsterdam.nl</span> &#x9b;</a>
									</div>
								</div>
					
								<div class="col-span-4 md:col-span-8 lg:col-span-12 grid md:grid-cols-8 lg:grid-cols-12 bg-orange mt-40 lg:mt-64 border-b-8 border-turquoise py-8 md:py-12">
									<div class="col-span-4 md:col-span-7 lg:col-span-11 md:col-start-2 lg:col-start-2 px-6 md:px-0">
										<h2 class="text-xl md:text-3xl lg:text-4xl font-black uppercase text-red my-6 font-HelveticaNeueLTPro-BlkEx">FAQ</h2>
										<ul>
											<li class="mb-6">
												<h2 class="uppercase text-red md:text-lg lg:text-2xl font-HelveticaNeueLTPro-MdCn">Op welke dag vindt STROOM plaats?</h2>
												<span class="text-sm md:text-base lg:text-xl font-HelveticaNeueLTPro-Ex">Op zondag.</span>
											</li>
											<li class="mb-6">
												<h2 class="uppercase text-red text-base md:text-lg lg:text-2xl font-HelveticaNeueLTPro-MdCn">Hoe laat vindt STROOM op zondag plaats?</h2>
												<span class="text-sm md:text-base lg:text-xl font-HelveticaNeueLTPro-Ex">Om 11 uur.</span>
											</li>
											<li class="mb-6">
												<h2 class="uppercase text-red text-base md:text-lg lg:text-2xl font-HelveticaNeueLTPro-MdCn">Waar vindt STROOM plaats op zondag om 11 uur?</h2>
												<span class="text-sm md:text-base lg:text-xl font-HelveticaNeueLTPro-Ex">Op de { prerender.data.globals.address.name } in Amsterdam.</span>
											</li>
											<li class="mb-6">
												<h2 class="uppercase text-red text-base md:text-lg lg:text-2xl font-HelveticaNeueLTPro-MdCn">Is er ook een kinderprogramma?</h2>
												<span class="text-sm md:text-base lg:text-xl font-HelveticaNeueLTPro-Ex">Zeker.</span>
											</li>
											<li class="mb-6">
												<h2 class="uppercase text-red text-base md:text-lg lg:text-2xl font-HelveticaNeueLTPro-MdCn">Komt Jezus ook?</h2>
												<span class="text-sm md:text-base lg:text-xl font-HelveticaNeueLTPro-Ex">Spoedig.</span>
											</li>
											<li class="mb-16">
												<h2 class="uppercase text-red text-base md:text-lg lg:text-2xl font-HelveticaNeueLTPro-MdCn">Zal ik me inschrijven voor de nieuwsbrief?</h2>
												<span class="text-sm md:text-base lg:text-xl font-HelveticaNeueLTPro-Ex">Ja, doen!</span>
											</li>
										</ul>
									</div>
								</div>
					
								<div class="col-span-4 md:col-span-8 lg:col-span-12 mt-8 md:mt-16 lg:mt-20">
									<span class="text-sm md:text-base lg:text-xl font-HelveticaNeueLTPro-Ex text-white">&copy; STROOM Amsterdam, {this.state.year}</span>
								</div>
							</div>
						</div>
					</div>
				</article>
			</div>
		);
	}
}
