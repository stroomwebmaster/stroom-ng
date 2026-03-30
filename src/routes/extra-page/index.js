import { Component } from 'preact';
import { usePrerenderData } from '@preact/prerender-data-provider';
import Markdown from 'markdown-to-jsx';

import Footer from '../../components/footer';
import Header from '../../components/header';

export default class ExtraPage extends Component {
	componentDidMount() {
		this.props.content?.body?.content &&
			(this.props.content.body.content = this.props.content.body.content.replaceAll(String.fromCharCode(92), ''));
	}

	render() {
		const [prerender] = usePrerenderData(this.props);

		return (
			<div>
				<Header content={prerender.data.header} />

				<article class="-mb-12">
					<div class="container mx-auto">
						<div class="px-4 md:px-0">
							<div class="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-4 relative">
								<div class="col-span-4 md:col-start-2 lg:col-start-2 md:col-span-6 lg:col-span-8 my-12 md:mt-24 md:mb-20 lg:mb-40">
									<div class="text-coal text-sm md:text-base lg:text-xl leading-relaxed md:leading-relaxed lg:leading-relaxed font-HelveticaNeueLTPro-Ex pl-4 markup">
										<Markdown>{prerender.data.body?.content || ''}</Markdown>
									</div>
								</div>
							</div>
						</div>
					</div>
				</article>

				<Footer content={prerender.data.globals.footer} faq={prerender.data.footer.faq} />
			</div>
		);
	}
}
