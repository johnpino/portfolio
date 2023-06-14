import React from 'react'

import { notFound } from 'next/navigation'
import { draftMode } from 'next/headers'

import getSlug from '@/lib/getSlug'
import getPage from '@/lib/getPage'

import type { Params } from '@/types/Params'

import RenderFeatures from '@/components/RenderFeatures'

export const dynamic = 'force-dynamic'

export default async function Draft({ params }: { params: Params }) {
	const slug = getSlug(params)

	if (!slug) notFound()

	const { isEnabled: isDraftMode } = draftMode()

	const data = await getPage(slug, isDraftMode)

	return <RenderFeatures data={data} />
}
