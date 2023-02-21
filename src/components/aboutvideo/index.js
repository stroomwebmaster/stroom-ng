import { Component } from 'preact';

const YTPlayer = require('yt-player');

export default class AboutVideo extends Component {

	state = {
		player: null,
		video: null
	};

	initYouTube() {
		this.setState({
			player: new YTPlayer('#aboutvideo' + this.props.content),
			video: `https://www.youtube.com/embed/${this.props.content}?enablejsapi=1`
		});
	}

	componentDidMount() {
		this.initYouTube();
	}

	render(props, state, context) {
		return (
			<div class={`col-span-3 bg-black w-9_16 md:h-9_16md lg:h-9_16lg h-9_16 even:mt-12 shadow-sharp-${props.shadow}`}>
				<iframe id={`aboutvideo${props.content}`} src={state.video} class="w-full h-full" frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; modestbranding"
						allowFullScreen />
			</div>
		);
	}
}
