const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
	webpack(config) {
		// eslint-disable-next-line no-param-reassign
		config.resolve.alias = {
			...config.resolve.alias,
			'@/vars': path.resolve(__dirname, '.css-vars'),
		}

		return config
	},
}

module.exports = nextConfig
