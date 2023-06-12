import React from 'react'

import { notFound } from 'next/navigation'

import getSlug from '@/lib/getSlug'
import getPage from '@/lib/getPage'

import type { Params } from '@/types/Params'

import RenderFeatures from '@/components/RenderFeatures'

export default async function Home({ params }: { params: Params }) {
	const slug = getSlug(params)

	if (!slug) notFound()

	const data = await getPage(slug)

	return <RenderFeatures data={data} />
}
