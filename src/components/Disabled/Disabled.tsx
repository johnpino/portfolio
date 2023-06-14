'use client'

import { Feature } from '@/types/Page'
import React from 'react'

import { useContentfulInspectorMode, useContentfulLiveUpdates } from '@contentful/live-preview/react'

export type DisabledProps = {
	heading1stRow: string
	heading2ndRow: string
	subheading: string
	description: string
}

export default function Disabled(props: Feature) {
	const updatedProps = useContentfulLiveUpdates(props)
	const inspectorProps = useContentfulInspectorMode({ entryId: props.sys.id })

	return (
		<div className="text-center">
			<h1 className="mb-2 text-4xl" {...inspectorProps({ fieldId: 'heading1stRow' })}>
				{updatedProps.heading1stRow} <br />
				<span className="text-6xl font-bold">{updatedProps.heading2ndRow}</span>
			</h1>
			<h2 className="mb-4" {...inspectorProps({ fieldId: 'subheading' })}>
				{updatedProps.subheading}
			</h2>
			<p className="text-sm italic font-light" {...inspectorProps({ fieldId: 'description' })}>
				{updatedProps.description}
			</p>
		</div>
	)
}
