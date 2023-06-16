import type { Meta, StoryObj } from '@storybook/react'

import { ContentfulLivePreview } from '@contentful/live-preview'
import Disabled from './Disabled'

ContentfulLivePreview.init({
	locale: 'en_US',
})

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Disabled> = {
	title: 'Organisms/Disabled',
	component: Disabled,
	tags: ['autodocs'],
	argTypes: {},
}

export default meta
type Story = StoryObj<typeof Disabled>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
	args: {
		__typename: 'Disabled',
		sys: {
			id: '22dQ9kI0LmOzCrMgydJKw5',
		},
		heading1stRow: 'From the Desk of',
		heading2ndRow: 'John Pino',
		subheading: 'Frontend Development',
		description: 'Under development',
	},
}
