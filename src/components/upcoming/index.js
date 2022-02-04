import { Component } from 'preact';

const YTPlayer = require('yt-player');

export default class Upcoming extends Component {
	initYouTube() {
		this.setState({
			player: new YTPlayer('#youtubevideo'),
			thumbnail: `https://img.youtube.com/vi/${this.props.upcoming?.videoId}/hqdefault.jpg`,
			video: `https://www.youtube.com/embed/${this.props.upcoming?.videoId}?enablejsapi=1`
		});
	}

	onThumbnailClick() {
		this.state.player.load(this.props.upcoming?.videoId, true);
		// Small delay to allow video to load.
		setInterval(() => this.setState({ isPlaying: true }), 300);
	}

	constructor(props) {
		super(props);
		this.onThumbnailClick = this.onThumbnailClick.bind(this);
		this.state = {
			isPlaying: false,
			player: null,
			thumbnail: null,
			video: null
		};
	}

	componentDidMount() {
		this.initYouTube();
	}

	render() {
		const links = this.props.upcoming?.links;
		let linkItems = null;

		if (links) {
			linkItems = links.map((link) =>
				(<>
					<a href={link.url} target={link.newWindow ? '_blank' : '_self'} rel={link.newWindow ? 'noreferrer noopener' : ''} class="uppercase text-white md:text-lg lg:text-2xl font-HelveticaNeueLTPro-MdCn">{link.name} ›</a><br />
				</>)
			);
		}

		return (
			<article class="bg-coal w-hd-80 xl:ml-auto">
				<div class="container mx-auto px-4 md:px-0">
					<div class="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-4 pt-32 md:pt-40 pb-32 md:pb-48">
						<div class="col-span-4 md:col-span-8 lg:col-span-12 text-right">
							<h2 class="text-xl md:text-3xl lg:text-4xl font-black uppercase text-magenta md:mb-12 font-HelveticaNeueLTPro-BlkEx">{this.props.upcoming?.title}</h2>
						</div>
						<div class="col-span-4 lg:col-span-7 md:col-start-2 lg:col-start-2 bg-black h-16_9 sm:h-73 md:h-48 lg:h-71 xl:h-85 shadow-sharp-lila mr-4 md:mr-8">
							<figure class={`yt-thumbnail-container ${this.state.isPlaying ? 'hidden' : ''}`}>
								<img src={this.state.thumbnail} class="w-full yt-thumbnail" alt="thumbnail" onClick={this.onThumbnailClick} />
							</figure>
							<div id="youtubebutton" class={`yt-play ${this.state.isPlaying ? 'hidden' : ''}`} />
							<iframe id="youtubevideo" src={this.state.video} class={`w-full h-full  ${this.state.isPlaying ? '' : 'hidden'}`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; modestbranding" allowfullscreen />
						</div>
						<div class="col-span-4 md:col-start-6 md:col-span-3 lg:col-start-10 lg:col-span-3">
							<p class="text-sm md:text-base lg:text-2xl leading-relaxed mt-8 md:mt-0 mb-4 md:mb-16 text-white font-HelveticaNeueLTPro-Ex">
								{this.props.upcoming?.description}
							</p>
							<br />
							{linkItems}
						</div>
					</div>
				</div>
			</article>
		);
	}
}
