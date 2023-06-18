/* eslint-disable no-console */
// const { registerTransforms } = require('@tokens-studio/sd-transforms')
// const StyleDictionary = require('style-dictionary')

// registerTransforms(StyleDictionary)

// const sd = StyleDictionary.extend({
// 	source: ['**/*.tokens.json'],
// 	platforms: {
// 		css: {
// 			transformGroup: 'tokens-studio',
// 			buildPath: 'build/css/',
// 			files: [
// 				{
// 					destination: 'variables.css',
// 					format: 'css/variables',
// 				},
// 			],
// 		},
// 	},
// })

// sd.cleanAllPlatforms()
// sd.buildAllPlatforms()

const { registerTransforms, transforms } = require('@tokens-studio/sd-transforms')
const StyleDictionaryPackage = require('style-dictionary')

registerTransforms(StyleDictionaryPackage)

StyleDictionaryPackage.registerTransformGroup({
	name: 'custom',
	transforms: [...transforms, 'name/cti/kebab'].filter((transform) => transform !== 'ts/size/px'),
})

function getStyleDictionaryConfig(theme) {
	return {
		include: [`src/design-tokens/globals/*.tokens.json`],
		source: [`src/design-tokens/themes/${theme}/*.tokens.json`],
		platforms: {
			scss: {
				transformGroup: 'custom',
				buildPath: `src/scss/themes/`,
				files: [
					{
						destination: `_${theme}.scss`,
						format: 'scss/variables',
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
			buildPath: `src/scss/abstracts/`,
			files: [
				{
					destination: `_variables.scss`,
					format: 'scss/variables',
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
	include: [`src/design-tokens/globals/*.tokens.json`, `src/design-tokens/themes/**/*.tokens.json`],
	source: [`src/design-tokens/components/*.tokens.json`],
	platforms: {
		scss: {
			transformGroup: 'custom',
			buildPath: `src/scss/components/`,
			files: [
				{
					destination: `_components.scss`,
					format: 'scss/variables',
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
