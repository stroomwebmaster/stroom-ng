import { Component } from 'preact';

const YTPlayer = require('yt-player');

export default class AboutVideo extends Component {
	initYouTube() {
		this.setState({
			player: new YTPlayer('#aboutvideo' + this.props.content?.videoId),
			video: `https://www.youtube.com/embed/${this.props.content}?enablejsapi=1`
		});
	}

	constructor(props) {
		super(props);
		this.state = {
			player: null,
			video: null
		};
	}

	componentDidMount() {
		this.initYouTube();
	}

	render() {
		return (
			<div class="col-span-3 bg-black w-9_16 md:h-9_16md lg:h-9_16lg h-9_16 shadow-sharp-lila even:mt-12">
				<iframe id={`aboutvideo${this.props.content?.videoId}`} src={this.state.video} class="w-full h-full" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; modestbranding" allowfullscreen />
			</div>
		);
	}
}
