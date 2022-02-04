import { Component } from 'preact';

const names = [
	'Iris Penning, 2021',
	'Jorgen Unom, 2021',
	'Boris van der Ham, 2020',
	'Michline Plukker, 2020',
	'Hugo de Haas van Dorsser, 2020',
	'Rikko Voorberg, 2018',
	'Erno Eskens, 2019',
	'Tim Vreugdenhil, 2019',
	'Tinkebel, 2020',
	'Michiel van Elk, 2017',
	'Linda Polman, 2019',
	'Don Ceder, 2019',
	'Daan Borrel, 2019',
	'Ewald Engelen, 2018',
	'Bram Bakker, 2016',
	'Simon(e) van Saarloos, 2016'
];

export default class Tiles extends Component {
	nameShuffle() {
		let newIndex = this.state.currentNameIndex;

		while (newIndex === this.state.currentNameIndex) {
			newIndex = Math.floor(Math.random() * Math.floor(14));
		}
	
		this.setState({
			name: names[newIndex],
			currentNameIndex: newIndex
		});
		setTimeout(() => {
			this.nameShuffle();
		}, 7000);
	}

	constructor(props) {
		super(props);
		this.state = {
			name: '',
			currentNameIndex: null
		};
	}

	componentDidMount() {
		this.nameShuffle();
	}

	render() {
		return (
			<article class="relative">
				<div class="bg-pink h-full w-5/6 absolute right-0" />
				<div class="container mx-auto px-4 md:px-0">
					<div class="grid grid-cols-4 md:grid-cols-12 gap-4 relative pb-16 lg:pb-24">
						<div class="dotted-red absolute w-1/2 md:w-1/3 h-full-dots-bottom -top-12 -left-6 md:-left-24 z-10" />
				
						<div class="col-span-4 bg-orange border-b-8 border-turquoise mt-16 md:mt-32 lg:mt-48 z-10 md:py-10 p-6 md:px-8">
							<p class="text-red-outline text-xl md:text-2xl lg:text-4xl font-black uppercase font-HelveticaNeueLTPro-BlkExO">&#x93;Elke zondag om 11 uur.&#x94;</p>
							<p class="text-red text-base md:text-lg lg:text-3xl mt-4 md:my-6 font-HelveticaNeueLTPro-Ex">- Stroominee, 2020</p>
						</div>
				
						<div class="col-span-4 bg-blue border-b-8 border-lila mt-4 md:mt-16 lg:mt-24 md:mb-24 z-10 md:py-10 p-6 md:px-8">
							<p class="text-turquoise text-xl md:text-2xl lg:text-4xl font-black uppercase font-HelveticaNeueLTPro-BlkExO">&#x93;Leuk om hier te zijn.&#x94;</p>
							<p class="text-turquoise text-base md:text-lg lg:text-3xl mt-4 md:my-6 font-HelveticaNeueLTPro-Ex block h-12">- {this.state.name}</p>
						</div>
				
						<div class="col-span-4 bg-magenta border-b-8 border-orange mt-4 md:mt-32 lg:mt-48 z-10 md:py-10 p-6 md:px-8">
							<p class="text-white text-xl md:text-2xl lg:text-4xl font-black uppercase font-HelveticaNeueLTPro-BlkExO">&#x93;Ik kom spoedig.&#x94;</p>
							<p class="text-white text-base md:text-lg lg:text-3xl mt-4 md:my-6 font-HelveticaNeueLTPro-Ex">- Jezus, 33</p>
						</div>
					</div>
				</div>
			</article>
		);
	}
}
