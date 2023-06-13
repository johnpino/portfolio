'use client'

import React from 'react'

import dynamic from 'next/dynamic'
import { notFound } from 'next/navigation'

import type { Page, Feature } from '@/types/Page'
import type { ComponentType } from 'react'

import { useContentfulLivePreviewFeatures } from '@/hooks/useContentfulLivePreviewFeatures'

export default function RenderFeatures({ data }: { data: Page | null }) {
	if (!data) notFound()

	const { updatedProps, inspectorTags } = useContentfulLivePreviewFeatures(data)

	const { featuresCollection } = updatedProps

	return featuresCollection.items.map((feature) => {
		// eslint-disable-next-line no-underscore-dangle
		const Component: ComponentType<Feature> = dynamic(() => import(`@/components/${feature.__typename}`))

		return (
			<main key={feature.sys.id} className="flex flex-col items-center justify-center min-h-screen p-24">
				<Component {...feature} inspectorTags={inspectorTags} />
			</main>
		)
	})
}
