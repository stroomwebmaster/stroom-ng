import Activity from './activity';

const Activities = (props) => (
	<article class="container mx-auto relative">
		<div class="px-4 md:px-0 mb-20 -mt-24 md:-mt-36 md:mb-32 lg:mb-40">
			<h2 class="text-xl md:text-3xl lg:text-4xl font-black uppercase text-red my-3 lg:my-6 font-HelveticaNeueLTPro-BlkEx">{props.content?.title}</h2>
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
