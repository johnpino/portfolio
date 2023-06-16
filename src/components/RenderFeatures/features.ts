import dynamic from 'next/dynamic'

import type { ComponentType } from 'react'
import type { Feature } from '@/types/Page'

const features: {
	[key: string]: ComponentType<Feature>
} = {
	Disabled: dynamic(() => import('@/components/Disabled')),
}

type KeysTypes = keyof typeof features
export type FeaturesTypes = (typeof features)[KeysTypes]

export default features
