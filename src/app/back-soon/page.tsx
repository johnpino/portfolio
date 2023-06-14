import React from 'react'

import getPage from '@/lib/getPage'
import RenderFeatures from '@/components/RenderFeatures'

import { draftMode } from 'next/headers'

export const dynamic = 'force-dynamic'

export default async function BackSoon() {
	const { isEnabled: isDraftMode } = draftMode()

	const data = await getPage('back-soon', isDraftMode)

	return <RenderFeatures data={data} />
}
