'use client'

import '@contentful/live-preview/style.css'

import { /* useContentfulInspectorMode, */ useContentfulLiveUpdates } from '@contentful/live-preview/react'

import type { Page } from '@/types/Page'

export type Tags = {
	['data-contentful-field-id']?: string | undefined
	['data-contentful-entry-id']?: string | undefined
} | null

// type InspectorTags = Record<string, Tags>

export function useContentfulLivePreviewFeatures(props: Page) {
	const updatedProps = useContentfulLiveUpdates(props)
	/* const inspectorProps = useContentfulInspectorMode({ entryId: props.sys.id })
	const inspectorTags: InspectorTags = {}

	Object.keys(props.fields).forEach((key) => {
		inspectorTags[key] = { ...inspectorProps({ fieldId: key }) }
	}) */

	return {
		updatedProps,
		// inspectorTags,
	}
}
