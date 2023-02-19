import { Component } from 'preact';

import style from './style';

const YTPlayer = require('yt-player');

export default class AboutVideo extends Component {
	initYouTube() {
		this.setState({
			player: new YTPlayer('#aboutvideo' + this.props.content),
			thumbnail: `https://img.youtube.com/vi/${this.props.content}/hqdefault.jpg`,
			video: `https://www.youtube.com/embed/${this.props.content}?enablejsapi=1`
		});
	}

	onThumbnailClick() {
		//this.state.player.load(this.props.content?.videoId, true);
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
		// Replace '\' in this string. It is left in from the CMS when using 'shift + enter' to create newline.
		//this.props.content.description = this.props.content?.description.replaceAll(String.fromCharCode(92), '');
		this.initYouTube();
	}

	render() {
		return (
			<div class="col-span-3 bg-black w-9_16 md:h-9_16md lg:h-9_16lg h-9_16 shadow-sharp-lila even:mt-12">
				<figure class={`${style.thumbnailContainer} ${this.state.isPlaying ? 'hidden' : ''}`}>
					<img src={this.state.thumbnail} class={`w-full ${style.thumbnail}`} alt="thumbnail" onClick={this.onThumbnailClick(1)} />
				</figure>
				<div id={`aboutbutton${this.props.content}`} class={`${style.play} ${this.state.isPlaying ? 'hidden' : ''}`} />
				<iframe id={`aboutvideo${this.props.content}`} src={this.state.video} class={`w-full h-full  ${this.state.isPlaying ? '' : 'hidden'}`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; modestbranding" allowfullscreen />
			</div>
		);
	}
}
