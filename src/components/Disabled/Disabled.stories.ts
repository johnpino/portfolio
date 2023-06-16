import type { Meta, StoryObj } from '@storybook/react'

import DisabledSkeleton from './Disabled.skeleton'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof DisabledSkeleton> = {
	title: 'Organisms/Disabled',
	component: DisabledSkeleton,
	tags: ['autodocs'],
	argTypes: {},
}

export default meta
type Story = StoryObj<typeof DisabledSkeleton>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
	args: {
		heading1stRow: 'From the Desk of',
		heading2ndRow: 'John Pino',
		subheading: 'Frontend Development',
		description: 'Under development',
	},
}
