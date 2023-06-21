import { clsx } from 'clsx'

import { useButton as useButtonAria, useLink as useLinkAria } from 'react-aria'
import styles from './Button.module.scss'

import type { ButtonProps } from './Button.types'

function getFullWidthClasses({ fullWidth }: Pick<ButtonProps, 'fullWidth'>) {
	if (typeof fullWidth === 'object') {
		return clsx({
			[styles['button--full-width-small']]: fullWidth.small,
			[styles['button--full-width-medium']]: fullWidth.medium,
			[styles['button--full-width-large']]: fullWidth.large,
		})
	}

	if (fullWidth) {
		return clsx(styles['button--full-width'])
	}

	return ''
}

function getClasses({
	variant,
	size,
	isDisabled,
	fullWidth,
}: Pick<ButtonProps, 'variant' | 'size' | 'isDisabled' | 'fullWidth'>) {
	const classes = clsx(
		styles.button,
		styles[`button--${variant}`],
		styles[`button--${size}`],
		{
			[styles['button--disabled']]: isDisabled,
		},
		getFullWidthClasses({ fullWidth }),
	)

	return classes
}

export function useButton(props: ButtonProps & { ref: React.MutableRefObject<null> }) {
	const { buttonProps: buttonAriaProps } = useButtonAria(props, props.ref)

	return {
		classes: getClasses({
			variant: props.variant,
			size: props.size,
			isDisabled: props.isDisabled,
			fullWidth: props.fullWidth,
		}),
		buttonProps: buttonAriaProps,
	}
}

export function useLink(props: ButtonProps & { ref: React.MutableRefObject<null> }) {
	const { linkProps: linkAriaprops } = useLinkAria(props, props.ref)

	return {
		classes: getClasses({
			variant: props.variant,
			size: props.size,
			isDisabled: props.isDisabled,
			fullWidth: props.fullWidth,
		}),
		buttonProps: linkAriaprops,
		tag: props.elementType,
	}
}
