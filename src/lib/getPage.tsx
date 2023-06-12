import getClient from '@/lib/getClient'
import { gql } from '@apollo/client'

export default async function getPage(slug: string) {
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

	const { data } = await getClient().query({ query })

	return data
}
