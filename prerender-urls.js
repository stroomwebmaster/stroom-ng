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

	const easter = JSON.parse(fs.readFileSync(join('content', 'easter', 'easter.json'), 'utf-8'));
	pages.push({
		url: '/pasen',
		//seo: to do
		data: {
			...easter
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
