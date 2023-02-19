import { Component } from 'preact';
import Markdown from 'preact-markdown';

import style from './style';

export default class Activities extends Component {
	componentDidMount() {
		// Replace '\' in this string. It is left in from the CMS when using 'shift + enter' to create newline.
		this.props.content.description = this.props.content?.description.replaceAll(String.fromCharCode(92), '');
	}

	render() {
		return (
			<article class="bg-pink w-full my-4 p-8">
				<h3 class="uppercase text-red text-base font-black md:text-lg lg:text-2xl font-HelveticaNeueLTPro-BlkEx">{this.props.content?.name}</h3>
				<span class="uppercase text-base md:text-lg font-HelveticaNeueLTPro-Ex block my-2">{this.props.content?.date}</span>
				<p class={`text-sm md:text-base font-HelveticaNeueLTPro-Ex ${style.activityDescription}`}><Markdown markdown={this.props.content?.description} /></p>
			</article>
		);
	}
}
