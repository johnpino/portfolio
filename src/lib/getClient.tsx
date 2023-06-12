import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'
import { registerApolloClient } from '@apollo/experimental-nextjs-app-support/rsc'

import assert from 'assert'

assert(process.env.CONTENTFUL_API_BASE_URL)
assert(process.env.CONTENTFUL_API_ENDPOINT)
assert(process.env.CONTENTFUL_SPACE_ID)
assert(process.env.CONTENTFUL_ENVIRONMENT)

const httpLink = new HttpLink({
	uri: `${process.env.CONTENTFUL_API_BASE_URL}${process.env.CONTENTFUL_API_ENDPOINT}${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.CONTENTFUL_ENVIRONMENT}`,
})

const { getClient } = registerApolloClient(
	() =>
		new ApolloClient({
			cache: new InMemoryCache(),
			link: httpLink,
		}),
)

export default getClient
