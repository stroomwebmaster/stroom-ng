const netlifyPlugin = require('preact-cli-plugin-netlify');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const imageminMozjpeg = require('imagemin-mozjpeg');

module.exports = (config, env) => {
	netlifyPlugin(config);
	env.production && !env.ssr && config.plugins.push(new ImageminPlugin({
		from: './build/assets/**',
		pngquant: {
			quality: '60'
		},
		plugins: [
			imageminMozjpeg({
				quality: 50,
				progressive: true
			})
		]
	}));

	config.module.rules.push({
		test: /\.(png|jpe?g|gif|otf)$/i,
		use: [
			{
				loader: 'file-loader',
				options: {
					outputPath: 'assets',
					publicPath: 'assets'
				}
			}
		]
	});

	return config;
};
