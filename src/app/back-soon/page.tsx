import React from 'react'

import getPage from '@/lib/getPage'
import RenderFeatures from '@/components/RenderFeatures'

import { draftMode } from 'next/headers'

export default async function BackSoon() {
	const { isEnabled: isDraftMode } = draftMode()

	const data = await getPage('back-soon', isDraftMode)

	return (
		<div className="grid grid--full-height grid--center">
			<div className="col-12">
				<RenderFeatures data={data} />
			</div>
		</div>
	)
}
