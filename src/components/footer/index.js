import { h, Component } from 'preact';
import Markdown from 'markdown-to-jsx';

export default class Home extends Component {
	constructor(props) {
		super(props);
		const date = new Date();
		this.state = { year: date.getFullYear() };
	}

	render() {
		const faqs = this.props.faq?.items;
		let faqItems = null;

		if (faqs) {
			faqItems = faqs.map((faq) =>
				(<>
					<li class="mb-6">
						<h2 class="uppercase text-red text-base md:text-lg lg:text-2xl font-HelveticaNeueLTPro-MdCn">{faq.question}</h2>
						<span class="text-sm md:text-base lg:text-xl font-HelveticaNeueLTPro-Ex underlined-links-parent"><Markdown>{faq.answer}</Markdown></span>
					</li>
				</>)
			);
		}

		return (
			<article class="bg-coal">
				<div class="bg-coal -mb-12 relative overflow-x-hidden">
					<div class="container mx-auto px-4 md:px-0">
						<div class="grid md:grid-cols-8 lg:grid-cols-12 gap-4 pt-10 md:pt-20">
							<div class="col-span-4 md:col-span-7 md:col-start-2 lg:col-span-11 lg:col-start-2">
								<h2 class="text-xl md:text-3xl lg:text-4xl font-black uppercase text-magenta my-6 lg:my-12 font-HelveticaNeueLTPro-BlkEx">{this.props.content?.contact?.title}</h2>
							</div>
							<div class="col-span-4 md:col-span-4 lg:col-span-5 relative grid md:grid-cols-4 lg:grid-cols-5">
								<div class="md:hidden w-screen border-t-4 border-l-4 border-b-4 border-lila rounded-l-2xl pt-12 pb-24 lg:pb-32 text-right absolute left-100% top-0" />
								<div class="w-screen border-t-4 border-r-4 border-b-4 border-lila rounded-r-2xl pt-12 pb-24 lg:pb-32 text-right absolute right-5% md:right-0 top-0" />
								<div class="md:col-start-2 md:col-span-3 lg:col-start-2 lg:col-span-4 pt-12 z-10">
									<a href={this.props.content?.contact?.facebook?.url} target="_blank" rel="noreferrer noopener" class="block uppercase text-white md:text-lg lg:text-2xl font-HelveticaNeueLTPro-MdCn"><span class="fab fa-facebook-square ml-1" />&nbsp;&nbsp;<span class="hover:underline">{this.props.content?.contact?.facebook?.title}</span> ›</a>
									<a href={this.props.content?.contact?.email?.url} class="md:hidden uppercase text-white md:text-lg lg:text-2xl font-HelveticaNeueLTPro-MdCn"><span class="fas fa-envelope ml-1" />&nbsp;&nbsp;<span class="hover:underline">{this.props.content?.contact?.email?.title}</span> ›</a>
								</div>
							</div>
							<div class="md:col-span-4 lg:col-span-7 relative md:grid md:grid-cols-4 lg:grid-cols-5 hidden">
								<div class="w-screen border-t-4 border-l-4 border-b-4 border-lila rounded-l-2xl pt-12 pb-24 lg:pb-32 text-right absolute left-0 top-0" />
								<div class="md:col-start-2 md:col-span-3 lg:col-start-2 lg:col-span-4 pt-12 z-10">
									<a href={this.props.content?.contact?.email?.url} aria-hidden="true" class="uppercase text-white md:text-lg lg:text-2xl font-HelveticaNeueLTPro-MdCn"><span class="fas fa-envelope" />&nbsp;&nbsp;<span class="hover:underline">{this.props.content?.contact?.email?.title}</span> ›</a>
								</div>
							</div>
				
							<div class="col-span-4 md:col-span-8 lg:col-span-12 grid md:grid-cols-8 lg:grid-cols-12 bg-orange mt-40 lg:mt-64 border-b-8 border-turquoise py-8 md:py-12">
								<div class="col-span-4 md:col-span-7 lg:col-span-11 md:col-start-2 lg:col-start-2 px-6 md:px-0">
									<h2 class="text-xl md:text-3xl lg:text-4xl font-black uppercase text-red my-6 font-HelveticaNeueLTPro-BlkEx">{this.props.content?.faq?.title}</h2>
									<ul class="mb-10">
										{faqItems}
									</ul>
								</div>
							</div>
				
							<div class="col-span-4 md:col-span-8 lg:col-span-12 mt-8 md:mt-16 lg:mt-20">
								<span class="text-sm md:text-base lg:text-xl font-HelveticaNeueLTPro-Ex text-white">&copy; {this.props.content?.copyrightName}, {this.state.year}</span>
							</div>
						</div>
					</div>
				</div>
			</article>
		);
	}
}
