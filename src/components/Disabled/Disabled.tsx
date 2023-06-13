import React from 'react'

export type DisabledProps = {
	heading1stRow: string
	heading2ndRow: string
	subheading: string
	description: string
	// eslint-disable-next-line react/require-default-props
	inspectorTags?: Record<string, object>
}

export default function Disabled({
	heading1stRow,
	heading2ndRow,
	subheading,
	description,
	inspectorTags,
}: DisabledProps) {
	return (
		<div className="text-center">
			<h1 className="mb-2 text-4xl" {...inspectorTags?.heading1stRow}>
				{heading1stRow} <br />
				<span className="text-6xl font-bold">{heading2ndRow}</span>
			</h1>
			<h2 className="mb-4" {...inspectorTags?.subheading}>
				{subheading}
			</h2>
			<p className="text-sm italic font-light" {...inspectorTags?.description}>
				{description}
			</p>
		</div>
	)
}
