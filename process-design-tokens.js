/* eslint-disable no-console */
const { registerTransforms, transforms } = require('@tokens-studio/sd-transforms')
const StyleDictionaryPackage = require('style-dictionary')

registerTransforms(StyleDictionaryPackage)

StyleDictionaryPackage.registerTransformGroup({
	name: 'custom',
	transforms: [...transforms, 'name/cti/kebab'],
})

function getStyleDictionaryConfig(theme) {
	return {
		include: [`src/design-tokens/globals/*.tokens.json`],
		source: [`src/design-tokens/themes/${theme}/*.tokens.json`],
		platforms: {
			scss: {
				transformGroup: 'custom',
				buildPath: `.css-vars/themes/`,
				files: [
					{
						destination: `_${theme}.css`,
						format: 'css/variables',
						options: {
							outputReferences: true,
						},
						filter: (token) => token.isSource,
					},
				],
			},
		},
	}
}

console.log('Build started...')

/**
 * Globals
 */

const globals = StyleDictionaryPackage.extend({
	source: [`src/design-tokens/globals/*.tokens.json`],
	platforms: {
		scss: {
			transformGroup: 'custom',
			buildPath: `.css-vars/global/`,
			files: [
				{
					destination: `_global.css`,
					format: 'css/variables',
				},
			],
		},
	},
})

globals.cleanAllPlatforms()
globals.buildAllPlatforms()

/**
 * Components
 */

const components = StyleDictionaryPackage.extend({
	include: [`src/design-tokens/globals/*.tokens.json`, `src/design-tokens/themes/base/*.tokens.json`],
	source: [`src/components/**/*.tokens.json`],
	platforms: {
		scss: {
			transformGroup: 'custom',
			buildPath: `.css-vars/components/`,
			files: [
				{
					destination: `_components.css`,
					format: 'css/variables',
					options: {
						outputReferences: true,
					},
					filter: (token) => token.isSource,
				},
			],
		},
	},
})

components.cleanAllPlatforms()
components.buildAllPlatforms()

/**
 * Themes
 */

const themes = ['base', 'dark']

themes.forEach((theme) => {
	console.log('\n==============================================')
	console.log(`\nProcessing: [${theme}]`)

	const StyleDictionary = StyleDictionaryPackage.extend(getStyleDictionaryConfig(theme))

	StyleDictionary.cleanAllPlatforms()
	StyleDictionary.buildAllPlatforms()

	console.log('\nEnd processing')
})

console.log('\n==============================================')
console.log('\nBuild completed!')
