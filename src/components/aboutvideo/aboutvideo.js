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

	render(props, state) {
		return (
			<div class={`col-span-3 bg-black w-9_16 md:h-9_16md lg:h-9_16lg h-9_16 even:lg:mt-12 odd:lg:mt-0 mt-6 shadow-sharp-${props.index === 2 ? 'magenta' : 'lila'} ${props.index === 0 ? 'hidden sm:block' : 'block'}`}>
				<iframe id={`aboutvideo${props.content}`} src={state.video} class="w-full h-full" frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; modestbranding"
					allowFullScreen
				/>
			</div>
		);
	}
}
