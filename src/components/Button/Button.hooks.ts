import { clsx } from 'clsx'

import { useButton as useButtonAria, useLink as useLinkAria } from 'react-aria'
import styles from './Button.module.scss'

import type { ButtonProps } from './Button.types'

function getClasses() {
	const classes = {
		button: clsx(styles.button),
	}

	return classes
}

export function useButton(props: ButtonProps & { ref: React.MutableRefObject<null> }) {
	const { buttonProps: buttonAriaProps } = useButtonAria(props, props.ref)

	return {
		classes: getClasses(),
		buttonProps: buttonAriaProps,
	}
}

export function useLink(props: ButtonProps & { ref: React.MutableRefObject<null> }) {
	const { linkProps: linkAriaprops } = useLinkAria(props, props.ref)

	return {
		classes: getClasses(),
		buttonProps: linkAriaprops,
		tag: props.elementType,
	}
}
