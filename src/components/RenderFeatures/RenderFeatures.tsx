import React from 'react'

import { notFound } from 'next/navigation'
import { draftMode } from 'next/headers'

import type { Page } from '@/types/Page'

import features from './features'
import featuresSkeleton from './featuresSkeletons'

import type { FeaturesTypes } from './features'
import type { FeaturesSkeletonsTypes } from './featuresSkeletons'

export default function RenderFeatures({ data }: { data: Page | null }) {
	if (!data) notFound()

	const { isEnabled: isDraftMode } = draftMode()

	const { featuresCollection } = data

	const components = isDraftMode ? features : featuresSkeleton

	return featuresCollection.items.map((feature) => {
		// eslint-disable-next-line no-underscore-dangle
		const Component: FeaturesTypes | FeaturesSkeletonsTypes = components[feature.__typename]

		return (
			<main key={feature.sys.id} className="flex flex-col items-center justify-center min-h-screen p-24">
				<Component {...feature} />
			</main>
		)
	})
}
