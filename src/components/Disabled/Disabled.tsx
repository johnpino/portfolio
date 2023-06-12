import React from 'react'

export type DisabledProps = {
	heading1stRow: string
	heading2ndRow: string
	subheading: string
	description: string
}

export default function Disabled({ heading1stRow, heading2ndRow, subheading, description }: DisabledProps) {
	return (
		<div className="text-center">
			<h1 className="mb-2 text-4xl">
				{heading1stRow} <br />
				<span className="text-6xl font-bold">{heading2ndRow}</span>
			</h1>
			<h2 className="mb-4">{subheading}</h2>
			<p className="text-sm italic font-light">{description}</p>
		</div>
	)
}
