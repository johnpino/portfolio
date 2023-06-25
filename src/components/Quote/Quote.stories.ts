import type { Meta, StoryObj } from '@storybook/react'

import QuoteSkeleton from './Quote.skeleton'

const meta: Meta<typeof QuoteSkeleton> = {
	title: 'Organisms/Quote',
	component: QuoteSkeleton,
	tags: ['autodocs'],
	argTypes: {},
}

export default meta
type Story = StoryObj<typeof QuoteSkeleton>

export const Default: Story = {
	args: {
		quote: 'I help by closing the gap between design and development',
	},
}
