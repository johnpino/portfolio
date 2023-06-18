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
	console.log(`tokens/${theme}/*.tokens.json`)
	return {
		include: [`tokens/globals/*.tokens.json`, `tokens/themes/${theme}/*.tokens.json`],
		source: [`tokens/components/*.tokens.json`],
		platforms: {
			scss: {
				transformGroup: 'custom',
				buildPath: `.dist/styles/${theme}/`,
				files: [
					{
						destination: 'tokens.scss',
						format: 'scss/variables',
						filter: (token) => token.isSource,
					},
				],
			},
		},
	}
}

console.log('Build started...')

const themes = ['base', 'dark']

themes.forEach((theme) => {
	console.log('\n==============================================')
	console.log(`\nProcessing: [${theme}]`)

	const StyleDictionary = StyleDictionaryPackage.extend(getStyleDictionaryConfig(theme))

	StyleDictionary.buildPlatform('scss')

	console.log('\nEnd processing')
})

console.log('\n==============================================')
console.log('\nBuild completed!')
