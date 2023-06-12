import React from 'react'

import getPage from '@/lib/getPage'
import RenderFeatures from '@/components/RenderFeatures'

export default async function BackSoon() {
	const data = await getPage('back-soon')

	return <RenderFeatures data={data} />
}
