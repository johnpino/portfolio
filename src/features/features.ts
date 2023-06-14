import dynamic from 'next/dynamic'

const features = {
	Disabled: dynamic(() => import('@/components/Disabled')),
}

export default features
