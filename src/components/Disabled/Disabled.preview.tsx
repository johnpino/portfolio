'use client'

import { Feature } from '@/types/Page'
import React from 'react'

import { usePreview } from '@/hooks/usePreview'
import DisabledSkeleton from './Disabled.skeleton'

export default function Disabled(props: Feature) {
	const { updatedProps, inspectorProps } = usePreview(props)

	return <DisabledSkeleton {...updatedProps} inspectorProps={inspectorProps} />
}
