import React, { ReactNode } from 'react'

import { useQuote } from './Quote.hooks'

export type QuoteProps = {
	quote: ReactNode
}

export default function QuoteSkeleton(props: QuoteProps) {
	const { classes } = useQuote()

	return <q className={classes.quote}>{props.quote}</q>
}
