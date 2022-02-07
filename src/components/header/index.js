import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

const Header = (props) => (
	<header class="overflow-x-hidden">
		<div class="bg-pink w-hd-80">
			<div class="container mx-auto px-4 md:px-0">
				<div class="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-4 pt-16 pb-16 md:pb-40">
					<div class="col-span-2 md:col-span-3 lg:col-span-4 text-5xl pb-2 md-grid-cols-8 lg:grid-cols-12">
						<img class="w-full" src="./assets/str00m_logo_animated.gif" alt="logo" />
					</div>
					<button class="col-span-1 col-start-4 md:col-start-8 md:col-span-1 lg:col-start-12 lg:col-span-1 h-8 md:h-10 w-full flex-wrap flex justify-end hidden" aria-label="menu">
						<span class="w-12 h-05 md:h-1 bg-red block mb-1" />
						<span class="w-12 h-05 md:h-1 bg-red block my-2" />
						<span class="w-12 h-05 md:h-1 bg-magenta block mt-1" />
					</button>
					<div class="col-span-4 md:col-span-6 lg:col-span-11 bg-orange px-4 md:text-right mt-12 md:mt-24 border-b-8 border-turquoise py-12">
						<div class="text-xl md:text-2xl lg:text-4xl font-black uppercase leading-tight relative md:-right-12">
							<h1 class="text-coal font-HelveticaNeueLTPro-BlkEx">{props.content?.title}</h1>
							<h2 class="inline md:block text-red-outline font-HelveticaNeueLTPro-BlkEx">{props.content?.subTitle}</h2>
							<h2 id="address1" class="inline md:block text-red-outline font-HelveticaNeueLTPro-BlkEx">{props.address?.name}</h2>
						</div>
					</div>
				</div>
			</div>
		</div>
	</header>
);

export default Header;
