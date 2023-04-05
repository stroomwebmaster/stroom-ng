import { Component } from 'preact';

import style from './style';

const YTPlayer = require('yt-player');

export default class AboutVideo extends Component {

	state = {
		player: null,
		isPlaying: false,
		thumbnail: null,
		video: null
	};

	initYouTube() {
		this.setState({
			player: new YTPlayer('#aboutvideo' + this.props.content),
			thumbnail: `https://img.youtube.com/vi/${this.props.content}/maxresdefault.jpg`,
			video: `https://www.youtube.com/embed/${this.props.content}?enablejsapi=1`
		});
	}

	onThumbnailClick() {
		this.state.player.load(this.props.content, true);
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

	render(props, state) {
		return (
			<div class={`col-span-3 bg-black w-9_16 md:h-9_16md lg:h-9_16lg h-9_16 even:lg:mt-12 odd:lg:mt-0 mt-6 shadow-sharp-${props.index === 2 ? 'magenta' : 'lila'} ${props.index === 0 ? 'hidden sm:block' : 'block'}`}>
				<figure className={`${style.thumbnailContainer} ${this.state.isPlaying ? 'hidden' : ''}`}>
					<img src={this.state.thumbnail} className={`w-full ${style.thumbnail}`} alt="thumbnail" onClick={this.onThumbnailClick} />
				</figure>
				<div id="youtubebutton" className={`${style.play} ${this.state.isPlaying ? 'hidden' : ''}`} />
				<iframe id={`aboutvideo${props.content}`} src={state.video} class={`w-full h-full ${this.state.isPlaying ? '' : 'hidden'}`} frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; modestbranding"
					allowFullScreen />
			</div>
		);
	}
}
