// eslint-disable-next-line func-names
export default function (plop) {
	plop.setGenerator(`React Components`, {
		description: `A React Component`,
		prompts: [
			{
				type: 'list',
				name: 'type',
				message: 'Type of the component:',
				choices: [
					{ name: 'Atom', value: 'Atoms' },
					{ name: 'Molecule', value: 'Molecules' },
					{ name: 'Organism', value: 'Organisms' },
				],
			},
			{
				type: 'input',
				name: 'name',
				message: 'Name of the component (e.g. Button, Select):',
				validate: (val) =>
					val[0] === val[0].toUpperCase() ? true : "Component's name should start with capital letter.",
			},
			{
				type: 'confirm',
				name: 'preview',
				message: 'Should have Preview file (For Contentful Live Preview)?:',
			},
		],
		actions({ preview }) {
			const actions = []

			actions.push({
				type: 'addMany',
				templateFiles: 'plop-templates/**/*.hbs',
				base: `plop-templates/src/components`,
				destination: `./src/components/{{name}}`,
				globOptions: {
					ignore: [!preview ? 'plop-templates/src/components/{{name}}.preview.tsx.hbs' : ''],
				},
			})

			return actions
		},
	})
}
