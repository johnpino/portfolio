'use client'

import '@contentful/live-preview/style.css'

import { useContentfulInspectorMode, useContentfulLiveUpdates } from '@contentful/live-preview/react'

import type { Page } from '@/types/Page'

export type Tags = {
	['data-contentful-field-id']?: string | undefined
	['data-contentful-entry-id']?: string | undefined
}

type InspectorTags = Record<string, Tags>

export function useContentfulLivePreviewFeatures(props: Page) {
	const updatedProps = useContentfulLiveUpdates(props)
	const inspectorProps = useContentfulInspectorMode()
	const inspectorTags: InspectorTags = {}

	props.featuresCollection.items.forEach((feature) => {
		Object.keys(feature).forEach((key) => {
			inspectorTags[key] = { ...inspectorProps({ entryId: feature.sys.id, fieldId: key }) }
		})
	})

	return {
		updatedProps,
		inspectorTags,
	}
}
