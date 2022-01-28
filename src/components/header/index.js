import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

const Header = () => (
	<header class="overflow-x-hidden -mb-12">
		  <div class="bg-pink w-hd-80">
			<div class="container mx-auto px-4 md:px-0">
				<div class="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-4 pt-16 pb-16 md:pb-40">
					<div class="col-span-2 md:col-span-3 lg:col-span-4 text-5xl pb-2 md-grid-cols-8 lg:grid-cols-12">
						<img class="w-full" src="./assets/str00m_logo_animated.gif" alt="logo" />
					</div>
					<button class="col-span-1 col-start-4 md:col-start-8 md:col-span-1 lg:col-start-12 lg:col-span-1 h-8 md:h-10 w-full flex-wrap flex justify-end" aria-label="menu">
						<span class="w-12 h-05 md:h-1 bg-red block mb-1" />
						<span class="w-12 h-05 md:h-1 bg-red block my-2" />
						<span class="w-12 h-05 md:h-1 bg-magenta block mt-1" />
					</button>
					<div class="col-span-4 md:col-span-6 lg:col-span-11 bg-orange px-4 md:text-right mt-12 md:mt-24 border-b-8 border-turquoise py-12">
						<div class="text-xl md:text-2xl lg:text-4xl font-black uppercase leading-tight relative md:-right-12">
							<h1 class="text-coal font-HelveticaNeueLTPro-BlkEx">Stroom Amsterdam</h1>
							<h2 class="inline md:block text-red-outline font-HelveticaNeueLTPro-BlkEx">Zondagochtend 11 uur</h2>
							<h2 id="address1" class="inline md:block text-red-outline font-HelveticaNeueLTPro-BlkEx" />
						</div>
					</div>
				</div>
			</div>
		  </div>
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
	</header>
);

export default Header;
