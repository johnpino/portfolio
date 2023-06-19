import { useContentfulInspectorMode, useContentfulLiveUpdates } from '@contentful/live-preview/react'
import { Feature } from '@/types/Page'

export function usePreview(props: Feature) {
	const updatedProps = useContentfulLiveUpdates(props)
	const inspectorProps = useContentfulInspectorMode({ entryId: props.sys.id })

	return {
		updatedProps,
		inspectorProps,
	}
}
