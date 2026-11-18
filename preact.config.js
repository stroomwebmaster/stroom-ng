const netlifyPlugin = require('preact-cli-plugin-netlify');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const imageminMozjpeg = require('imagemin-mozjpeg');

// Content-hashed filenames, so they can be cached for good. Images are left out:
// /assets also holds unhashed files referenced by fixed name.
const longCacheHeaders = [
	'/bundle.*',
	'/*.chunk.*.css',
	'/assets/*.otf'
].map(path => `\n${path}\n\tCache-Control: public, max-age=31536000, immutable`).join('');

const appendLongCacheHeaders = {
	apply: compiler => compiler.hooks.emit.tap('LongCacheHeaders', compilation => {
		const headers = compilation.assets._headers;
		if (!headers) return;
		const text = headers.source() + longCacheHeaders;
		compilation.assets._headers = { source: () => text, size: () => text.length };
	})
};

module.exports = (config, env) => {
	netlifyPlugin(config);
	config.plugins.push(appendLongCacheHeaders);
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
