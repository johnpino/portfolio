import React from 'react'

import dynamic from 'next/dynamic'

import type { Page, Feature } from '@/types/Page'
import type { ComponentType } from 'react'

export default function RenderFeatures({ data }: { data: Page }) {
	const { featuresCollection } = data

	return featuresCollection.items.map((feature) => {
		// eslint-disable-next-line no-underscore-dangle
		const Component: ComponentType<Feature> = dynamic(() => import(`@/components/${feature.__typename}`))

		return (
			<main className="flex flex-col items-center justify-center min-h-screen p-24">
				<Component {...feature} />
			</main>
		)
	})
}
