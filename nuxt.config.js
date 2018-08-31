const resolve = require('path').resolve;
const config = {
	/*
  ** Headers of the page
  */
	head: {
		title: '中午吃什麼',
		meta: [
			{ charset: 'utf-8' },
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1',
			},
			{
				hid: 'description',
				name: 'description',
				content: 'Nuxt.js project',
			},
		],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
		script: [
			{
				src: 'https://code.jquery.com/jquery-3.3.1.min.js',
			},
		],
		css: ['~assets/css/reset.css'],
	},
	/*
  ** Customize the progress bar color
  */
	loading: { color: '#3B8070' },
	/*
  ** Build configuration
  */
	build: {
		vendor: ['qs'],
		babel: {
			presets: ['es2015', 'stage-0'],
			plugins: ['transform-runtime'],
		},
		/*
    ** Run ESLint on save
    */
		extend(config, { isDev, isClient }) {
			if (isDev && isClient) {
				config.module.rules.push({
					enforce: 'pre',
					test: /\.(js|vue)$/,
					loader: 'eslint-loader',
					exclude: /(node_modules)/,
				});
			}
		},
    },
    modules: [
		'@nuxtjs/axios', // With options
		'@nuxtjs/proxy',
    ],
    router: {
		// 改變基準路徑
		base: '/',
		// 增加 404
		extendRoutes(routes) {
			routes.push({
				path: '*',
				component: resolve(__dirname, 'pages/404.vue'),
			});
		},
	
	},
}
module.exports = config;

