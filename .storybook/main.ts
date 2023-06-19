import type { StorybookConfig } from '@storybook/nextjs'
const path = require('path')

const config: StorybookConfig = {
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
	addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],
	framework: {
		name: '@storybook/nextjs',
		options: {},
	},
	docs: {
		autodocs: 'tag',
	},
	webpackFinal: async (config) => {
		if (!config.resolve) return config
		// eslint-disable-next-line no-param-reassign
		config.resolve.alias = {
			...config.resolve.alias,
			'@/vars': path.resolve(__dirname, '../.css-vars'),
			'@/modules': path.resolve(__dirname, '../node_modules'),
			'@/src': path.resolve(__dirname, '../src'),
		}

		return config
	},
}
export default config
