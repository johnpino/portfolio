'use client'

import { Feature } from '@/types/Page'
import React from 'react'

import { useContentfulInspectorMode, useContentfulLiveUpdates } from '@contentful/live-preview/react'

import DisabledSkeleton from './Disabled.skeleton'

export default function Disabled(props: Feature) {
	const updatedProps = useContentfulLiveUpdates(props)
	const inspectorProps = useContentfulInspectorMode({ entryId: props.sys.id })

	return <DisabledSkeleton {...updatedProps} inspectorProps={inspectorProps} />
}
