import type { DisabledProps } from '@/components/Disabled'

type FeatureSkeleton<T, K> = {
	__typename: T
} & K

export type Feature = FeatureSkeleton<'Disabled', DisabledProps>

export interface Page {
	__typename: 'Page'
	sys: {
		__typename: 'Sys'
		id: string
	}
	slug: string
	title: string
	description: string
	featuresCollection: {
		__typename: 'PageFeaturesCollection'
		items: Array<Feature>
	}
}

export interface PageCollection {
	pageCollection: {
		__typename: 'PageCollection'
		items: Array<Page>
	}
}
