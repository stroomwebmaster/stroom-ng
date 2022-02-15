const Introduction = (props) => (
	<article class="-mb-12">
		<div class="container mx-auto">
			<div class="px-4 md:px-0">
				<div class="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-4 relative">
					<div class="dotted-red absolute w-1/2 h-full-dots-top -top-6 md:-top-12 -right-24 md:-right-40" />
					<div class="col-span-3 md:col-start-2 lg:col-start-2 md:col-span-4 lg:col-span-6 my-12 md:mt-24 md:mb-20 lg:mb-40">
						<p class="text-coal text-sm md:text-lg lg:text-2xl leading-relaxed md:leading-relaxed lg:leading-relaxed md:mb-8 font-HelveticaNeueLTPro-Ex pl-4">
							{props.content?.description}
						</p>
					</div>
				</div>
			</div>
			<form
				action="https://stroomamsterdam.us17.list-manage.com/subscribe/post?u=79f9dab6aa872630f9b994fcd&amp;id=10c844441b"
				class="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-4 bg-blue py-6 md:py-12 border-b-8 border-magenta px-4 relative md:px-0 mx-4 md:mx-0"
				method="post"
				target="_blank"
				novalidate
			>
				<div class="col-span-4 md:col-start-2 lg:col-start-2 md:col-span-7 lg:col-span-11">
					<h2 class="uppercase text-turquoise text-xl md:text-3xl lg:text-4xl leading-normal md:leading-normal lg:leading-normal font-black font-HelveticaNeueLTPro-BlkEx">{props.content?.newsletterTitle}</h2>
				</div>
				<div class="col-span-4 md:col-start-2 lg:col-start-2 md:col-span-4 lg:col-span-7">
					<input type="email" value="" name="EMAIL" id="mce-EMAIL" class="w-full h-12 md:h-full px-3 text-sm md:text-lg lg:text-2xl" />
				</div>
				<div class="col-span-4 md:col-span-2 lg:col-span-3">
					<input type="submit" class="w-full bg-magenta py-3 text-white uppercase text-lg lg:text-2xl font-semibold font-HelveticaNeueLTPro-MdCn cursor-pointer" value={props.content?.newsletterButton} />
				</div>
			</form>
		</div>
	</article>
);

export default Introduction;
