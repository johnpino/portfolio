import getClient from '@/lib/getClient'
import { gql } from '@apollo/client'

import type { PageCollection, Page } from '@/types/Page'

import { draftMode } from 'next/headers'

import assert from 'assert'

assert(process.env.CONTENTFUL_DELIVERY_ACCESS_TOKEN)
assert(process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN)

export default async function getPage(slug: string, preview?: boolean): Promise<Page | null> {
	const { isEnabled: isDraftMode } = draftMode()

	const shouldUsePreview: boolean = preview || (isDraftMode && preview === undefined)

	const authHeader = shouldUsePreview
		? `Bearer ${process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN}`
		: `Bearer ${process.env.CONTENTFUL_DELIVERY_ACCESS_TOKEN}`

	const query = gql`
		query pageCollectionQuery {
			pageCollection(where: { slug: "${slug}" }, preview: ${shouldUsePreview}) {
				items {
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

	const { data }: { data: PageCollection } = await getClient().query({
		query,
		context: {
			headers: {
				authorization: authHeader,
			},
		},
	})

	if (data.pageCollection.items.length === 0) {
		return null
	}

	return data.pageCollection.items[0]
}
