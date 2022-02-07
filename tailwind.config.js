module.exports = {
	content: ['./src/**/*.{html,js}'],
	theme: {
		colors: {
			white: '#FFF',
			pink: '#F9D9F9',
			orange: '#FC9B59',
			red: '#FF1300',
			blue: '#0000FF',
			turquoise: '#00FFFF',
			lila: '#F687F9',
			magenta: '#FF00FF',
			coal: '#282828',
			black: '#000'
		},
		boxShadow: {
			'sharp-lila': '20px 20px 0px 3px #F687F9'
		},
		extend: {
			inset: {
				'-6': '-2rem',
				'-12': '-4rem',
				'-24': '-8rem',
				'-40': '-14rem',
				'5%': '5%',
				'100%': '100%'
			},
			height: {
				'16_9': 'calc(56.25vw - 28px)',
				71: '19.5rem',
				73: '20.7rem',
				85: '25rem',
				105: '32rem'
			},
			fontFamily: {
				'HelveticaNeueLTPro-BlkEx': ['HelveticaNeueLTPro-BlkEx'],
				'HelveticaNeueLTPro-BlkExO': ['HelveticaNeueLTPro-BlkExO'],
				'HelveticaNeueLTPro-Ex': ['HelveticaNeueLTPro-Ex'],
				'HelveticaNeueLTPro-ExO': ['HelveticaNeueLTPro-ExO'],
				'HelveticaNeueLTPro-MdCn': ['HelveticaNeueLTPro-MdCn'],
				'HelveticaNeueLTPro-MdCnO': ['HelveticaNeueLTPro-MdCnO']
			}
		}
	},
	variants: {},
	plugins: []
};
