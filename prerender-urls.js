const { join } = require('path');
const fs = require('fs');

module.exports = () => {
	const pages = [];

	const homepage = JSON.parse(fs.readFileSync(join('content', 'homepage', 'homepage.json'), 'utf-8'));
	pages.push({
		url: '/',
		//seo: to do
		data: {
			...homepage
		}
	});

	const donation = JSON.parse(fs.readFileSync(join('content', 'donation', 'donation.json'), 'utf-8'));
	pages.push({
		url: '/donatie',
		//seo: to do
		data: {
			...donation
		}
	});

	const globals = JSON.parse(fs.readFileSync(join('content', 'globals.json'), 'utf-8'));
	pages.forEach((page) => {
		page.data = {
			globals: {
				...globals
			},
			...page.data
		};
	});

	return pages;
};
