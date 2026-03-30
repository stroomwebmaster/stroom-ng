import Activity from './activity';

const Activities = (props) => (
	<article class="relative xl:ml-auto w-hd-80">
		<div class="container mx-auto px-4 md:px-0 mb-20 -mt-24 md:-mt-36 md:mb-32 lg:mb-40">
			{props.pageLink?.show &&
				<div class="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-4 mb-4 lg:mb-6">
					<div class="col-span-4 md:col-start-5 md:col-span-3 lg:col-start-9 lg:col-span-4">
						<a native href={props.pageLink.url} class="uppercase text-white md:text-lg lg:text-2xl font-HelveticaNeueLTPro-MdCn hover:underline">
							{props.pageLink.text}&nbsp;›
						</a>
					</div>
				</div>
			}
			<h2 class={`text-xl md:text-3xl lg:text-4xl font-black uppercase text-red font-HelveticaNeueLTPro-BlkEx ${props.pageLink?.show ? 'mb-3 lg:mb-4' : 'my-3 lg:my-6'}`}>{props.content?.title}</h2>
			<div class="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-4">
				<div class="col-span-4 lg:col-span-6 hidden md:block">
					{props.content?.activity.filter((activity, index) => index % 2 === 0).map((activity) => <Activity content={activity} />)}
				</div>
				<div class="col-span-4 lg:col-span-6 hidden md:block">
					{props.content?.activity.filter((activity, index) => index % 2 === 1).map((activity) => <Activity content={activity} />)}
				</div>
				<div class="col-span-4 block md:hidden">
					{props.content?.activity.map((activity) => <Activity content={activity} />)}
				</div>
			</div>
		</div>
	</article>
);

export default Activities;
