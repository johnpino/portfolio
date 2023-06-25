'use client'

import { Feature } from '@/types/Page'
import React from 'react'

import { usePreview } from '@/hooks/usePreview'
import QuoteSkeleton from './Quote.skeleton'

export default function Quote(props: Feature) {
	const { updatedProps, inspectorProps } = usePreview(props)

	return <QuoteSkeleton {...updatedProps} inspectorProps={inspectorProps} />
}
