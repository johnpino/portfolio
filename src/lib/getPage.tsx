import getClient from '@/lib/getClient'
import { gql } from '@apollo/client'

import type { PageCollection, Page } from '@/types/Page'

export default async function getPage(slug: string): Promise<Page> {
	const query = gql`
		query pageCollectionQuery {
			pageCollection(where: { slug: "${slug}" }) {
				items {
					sys {
						id
					}
					slug
					title
                    description
                    featuresCollection {
                        items{
                            ...on Disabled {
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

	const { data }: { data: PageCollection } = await getClient().query({ query })

	return data.pageCollection.items[0]
}
