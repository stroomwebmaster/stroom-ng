import { Component } from 'preact';

import style from './style';
import Markdown from 'preact-markdown';

export default class Venue extends Component {
	componentDidMount() {
		// Replace '\' in this string. It is left in from the CMS when using 'shift + enter' to create newline.
		this.props.content.description = this.props.content?.description.replaceAll(String.fromCharCode(92), '');
	}

	render() {
		return (
			<article class="bg-coal w-hd-80 xl:ml-auto relative">
				<img src="./assets/venue2.jpg" class={`w-full ${style.locationPhoto}`} />
				<div class="container mx-auto px-4 md:px-0 relative -top-20">
					<div class="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-4 bg-orange lg:mt--40 border-b-8 border-turquoise py-8 md:py-12">
						<div class="col-span-4 md:col-span-6 lg:col-span-10 md:col-start-2 lg:col-start-2 px-6 md:px-0 text-coal text-sm md:text-lg lg:text-2xl leading-relaxed md:leading-relaxed lg:leading-relaxed font-HelveticaNeueLTPro-Ex">
							<Markdown markdown={this.props.content?.description} />
						</div>
					</div>
				</div>
			</article>
		);
	}
}
