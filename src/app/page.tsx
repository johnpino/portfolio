import assert from 'assert'

import React from 'react'

import UnderDevelopment from '@/components/UnderDevelopment'

assert(process.env.UNDER_DEVELOPMENT)

export default function Home() {
	return (
		<main className="flex flex-col items-center justify-center min-h-screen p-24">
			{process.env.UNDER_DEVELOPMENT === 'true' ? <UnderDevelopment /> : <div>Empty</div>}
		</main>
	)
}
