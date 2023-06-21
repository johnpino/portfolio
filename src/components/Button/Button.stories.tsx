import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import ButtonSkeleton from './Button.skeleton'

const meta: Meta<typeof ButtonSkeleton> = {
	title: 'Atoms/Button',
	component: ButtonSkeleton,
	tags: ['autodocs'],
	argTypes: {},
}

export default meta
type Story = StoryObj<typeof ButtonSkeleton>

export const Default: Story = {
	args: {
		elementType: 'button',
		isDisabled: false,
		children: <>Button</>,
		variant: 'primary',
		size: 'small',
		// eslint-disable-next-line no-alert
		onPress: () => alert('Click'),
		fullWidth: {
			small: false,
			medium: false,
			large: false,
		},
	},
}

export const Link: Story = {
	args: {
		elementType: 'a',
		isDisabled: false,
		children: <>Button</>,
		variant: 'primary',
		href: '/',
		target: '_blank',
	},
}
