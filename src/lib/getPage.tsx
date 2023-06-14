import type { PageCollection, Page } from '@/types/Page'

import assert from 'assert'

assert(process.env.CONTENTFUL_API_BASE_URL)
assert(process.env.CONTENTFUL_API_ENDPOINT)
assert(process.env.CONTENTFUL_SPACE_ID)
assert(process.env.CONTENTFUL_ENVIRONMENT)
assert(process.env.CONTENTFUL_DELIVERY_ACCESS_TOKEN)
assert(process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN)

export default async function getPage(slug: string, preview: boolean = false): Promise<Page | null> {
	const authHeader = preview
		? `Bearer ${process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN}`
		: `Bearer ${process.env.CONTENTFUL_DELIVERY_ACCESS_TOKEN}`

	const query = `
		query pageCollectionQuery {
			pageCollection(where: { slug: "${slug}" }, preview: ${preview}) {
				__typename
				items {
					__typename
					sys {
						id
					}
					slug
					title
                    description
                    featuresCollection {
                        items{
							__typename
                            ...on Disabled {
								sys {
									id
								}
                                heading1stRow
                                heading2ndRow
                                subheading
                                description
                            }
                        }
                    }
				}
			}
		}
	`

	const fetchResponse = await fetch(
		`${process.env.CONTENTFUL_API_BASE_URL}${process.env.CONTENTFUL_API_ENDPOINT}${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.CONTENTFUL_ENVIRONMENT}`,
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: authHeader,
			},
			body: JSON.stringify({ query }),
			cache: preview ? 'no-store' : 'default',
		},
	)

	const { data }: { data: PageCollection } = await fetchResponse.json()

	if (data.pageCollection.items.length === 0) {
		return null
	}

	return data.pageCollection.items[0]
}
