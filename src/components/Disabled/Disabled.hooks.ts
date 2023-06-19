import { clsx } from 'clsx'

import styles from './Disabled.module.scss'

export function useDisabled() {
	const classes = {
		disabled: clsx(styles.disabled),
		heading: clsx(styles.disabled__heading),
		headingSpotlight: clsx(styles.spotlight),
		subheading: clsx(styles.disabled__subheading),
		description: clsx(styles.disabled__description),
	}
	return {
		classes,
	}
}
