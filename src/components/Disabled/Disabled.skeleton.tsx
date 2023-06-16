import React from 'react'

export type DisabledProps = {
	heading1stRow: string
	heading2ndRow: string
	subheading: string
	description: string
	inspectorProps?: Function | undefined
}

export default function DisabledSkeleton(props: DisabledProps) {
	return (
		<div className="text-center">
			<h1 className="mb-2 text-4xl" {...props.inspectorProps?.({ fieldId: 'heading1stRow' })}>
				{props.heading1stRow} <br />
				<span className="text-6xl font-bold">{props.heading2ndRow}</span>
			</h1>
			<h2 className="mb-4" {...props.inspectorProps?.({ fieldId: 'subheading' })}>
				{props.subheading}
			</h2>
			<p className="text-sm italic font-light" {...props.inspectorProps?.({ fieldId: 'description' })}>
				{props.description}
			</p>
		</div>
	)
}
