import React, { useRef } from 'react'

import { useButton } from '../Button.hooks'
import type { ButtonProps } from '../Button.types'

export default function Default(props: ButtonProps) {
	const ref = useRef(null)
	const { classes, buttonProps } = useButton({ ...props, ref })

	return (
		// eslint-disable-next-line react/button-has-type
		<button className={classes} {...buttonProps} ref={ref}>
			{props.children}
		</button>
	)
}
