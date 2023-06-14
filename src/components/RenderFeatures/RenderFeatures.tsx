'use client'

import React from 'react'

import { notFound } from 'next/navigation'

import type { Page, Feature } from '@/types/Page'
import type { ComponentType } from 'react'

import features from '@/features/features'

export default function RenderFeatures({ data }: { data: Page | null }) {
	if (!data) notFound()

	const { featuresCollection } = data

	return featuresCollection.items.map((feature) => {
		// eslint-disable-next-line no-underscore-dangle
		const Component: ComponentType<Feature> = features[feature.__typename]

		return (
			<main key={feature.sys.id} className="flex flex-col items-center justify-center min-h-screen p-24">
				<Component {...feature} />
			</main>
		)
	})
}
