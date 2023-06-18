const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
	webpack(config) {
		// eslint-disable-next-line no-param-reassign
		config.resolve.alias = {
			...config.resolve.alias,
			'@/vars': path.resolve(__dirname, '.css-vars'),
			'@/modules': path.resolve(__dirname, 'node_modules'),
			'@/src': path.resolve(__dirname, 'src'),
		}

		return config
	},
}

module.exports = nextConfig
