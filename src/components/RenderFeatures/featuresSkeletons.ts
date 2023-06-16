import dynamic from 'next/dynamic'

import type { ComponentType } from 'react'
import type { DisabledProps } from '../Disabled/Disabled.skeleton'

const featuresSkeletons: {
	[key: string]: ComponentType<DisabledProps>
} = {
	Disabled: dynamic(() => import('@/components/Disabled/Disabled.skeleton')),
}

type KeysTypes = keyof typeof featuresSkeletons
export type FeaturesSkeletonsTypes = (typeof featuresSkeletons)[KeysTypes]

export default featuresSkeletons
