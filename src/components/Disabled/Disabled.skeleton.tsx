import React from 'react'

import useDisabled from './Disabled.hooks'

export type DisabledProps = {
	heading1stRow: string
	heading2ndRow: string
	subheading: string
	description: string
	inspectorProps?: Function | undefined
}

export default function DisabledSkeleton(props: DisabledProps) {
	const { classes } = useDisabled()

	return (
		<div className={classes.disabled}>
			<h1 className={classes.heading} {...props.inspectorProps?.({ fieldId: 'heading1stRow' })}>
				{props.heading1stRow} <br />
				<span className={classes.headingSpotlight}>{props.heading2ndRow}</span>
			</h1>
			<h2 className={classes.subheading} {...props.inspectorProps?.({ fieldId: 'subheading' })}>
				{props.subheading}
			</h2>
			<p className={classes.description} {...props.inspectorProps?.({ fieldId: 'description' })}>
				{props.description}
			</p>
		</div>
	)
}
