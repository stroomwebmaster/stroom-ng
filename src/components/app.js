import { h, Component } from 'preact';
import { Router } from 'preact-router';
import { Provider } from '@preact/prerender-data-provider';
import NotFoundPage from '../routes/notfound';

// Code-splitting is automated for routes
import Home from '../routes/home';
import Blogs from '../routes/blogs';
import Blog from '../routes/blog';
import Contact from '../routes/contact';
import ContactSuccess from '../routes/contact-success';

export default class App extends Component {

	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	componentDidMount() {
		if (!!window.MSInputMethodContext && !!document.documentMode) {
			document.getElementById('ie11-warning').classList.remove('hidden');
		}
	}

	render(props) {
		return (
			<div id="preact_root">
				<Provider value={props}>
					<article id="ie11-warning" class="hidden fixed w-full h-full top-0 left-0 bg-pink z-20">
						<div class="bg-orange px-4 text-right border-b-8 border-turquoise py-12">
							<div class="text-xl md:text-2xl lg:text-4xl font-black uppercase leading-tight">
								<h2 class="text-coal font-HelveticaNeueLTPro-BlkEx">Stroom Amsterdam</h2>
								<h2 class="text-red font-HelveticaNeueLTPro-BlkEx">Deze browser wordt niet ondersteund</h2>
							</div>
						</div>
					</article>
					<div id="app">
						<Router onChange={this.handleRoute}>
							<Home path="/" />
							<Blogs path="/blogs/" />
							<Blog path="/blog/:name" />
							<Contact path="/contact/" />
							<ContactSuccess path="/contact/success" />
							<NotFoundPage type="404" default />
						</Router>
					</div>
				</Provider>
			</div>
		);
	}
}
