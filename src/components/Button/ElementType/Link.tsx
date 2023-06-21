import React, { useRef } from 'react'

import { useLink } from '../Button.hooks'
import type { ButtonProps } from '../Button.types'

export default function Link(props: ButtonProps) {
	const ref = useRef(null)
	const { classes, buttonProps } = useLink({ ...props, ref })

	if (!('href' in props)) throw new Error('href was not provided')

	const { href, target } = props

	return (
		<a className={classes} {...buttonProps} href={href} target={target} ref={ref}>
			{props.children}
		</a>
	)
}
