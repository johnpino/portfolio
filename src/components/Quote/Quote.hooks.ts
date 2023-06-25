import { clsx } from 'clsx'

import styles from './Quote.module.scss'

export function useQuote() {
	const classes = {
		quote: clsx(styles.quote),
	}
	return {
		classes,
	}
}
