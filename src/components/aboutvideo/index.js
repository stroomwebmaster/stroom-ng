import AboutVideo from './aboutvideo';

const AboutVideos = (props) => (
	<article class="bg-coal w-hd-80 xl:ml-auto flex flex-row pb-64">
		<div class="container mx-auto px-4 md:px-0">
			<h2 className="text-xl md:text-3xl lg:text-4xl font-black uppercase text-magenta mb-3 lg:mb-10 font-HelveticaNeueLTPro-BlkEx">{props.content?.title}</h2>
			<div class="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-12 gap-6">
				{props.content?.videoIds.map((video, index) => <AboutVideo content={video.id} index={index} />)}
			</div>
		</div>
	</article>
);

export default AboutVideos;
