import type { Params } from '@/types/Params'

export default function getSlug(params: Params) {
	if ('slug' in params) {
		if (Array.isArray(params.slug)) {
			return params.slug.join('/')
		}
	}

	if (Object.keys(params).length === 0) {
		return '/'
	}

	return null
}
