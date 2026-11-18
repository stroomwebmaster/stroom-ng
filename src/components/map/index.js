import style from './style';

const embedUrl = ({ lat, lng }) => `https://maps.google.com/maps?q=${lat},${lng}&z=17&hl=nl&output=embed`;

const Map = ({ content, address }) => (
	<article class="relative z-10 h-105">
		<div class="container mx-auto px-4 md:px-0">
			<div class="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-4 pt-16 md:pt-24">
				<div class="col-span-4 md:col-start-4 md:col-span-5 lg:col-start-5 lg:col-span-8">
					<h2 class="text-xl md:text-3xl lg:text-4xl font-black uppercase text-blue mb-5 lg:mb-8 z-10 font-HelveticaNeueLTPro-BlkEx">{content?.title}</h2>
					<div class={`relative w-full ${style.container}`}>
						{address?.coordinates && (
							<iframe
								class="w-full h-full border-0 pointer-events-none"
								src={embedUrl(address.coordinates)}
								title={`Kaart: ${address.name}`}
								tabIndex="-1"
								loading="lazy"
								referrerpolicy="no-referrer-when-downgrade"
							/>
						)}
						{address?.coordinates && address?.name && (
							<span class={style.label} aria-hidden="true">{address.name}</span>
						)}
					</div>
					<div class={`col-span-4 md:col-start-4 md:col-span-5 lg:col-start-5 lg:col-span-8 relative left-0 bg-blue ${style.overlay}`} />
				</div>
			</div>
		</div>
	</article>
);

export default Map;
