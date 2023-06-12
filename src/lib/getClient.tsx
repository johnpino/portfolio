import { ApolloClient, ApolloLink, HttpLink, InMemoryCache } from '@apollo/client'
import { registerApolloClient } from '@apollo/experimental-nextjs-app-support/rsc'

import assert from 'assert'

assert(process.env.CONTENTFUL_API_BASE_URL)
assert(process.env.CONTENTFUL_API_ENDPOINT)
assert(process.env.CONTENTFUL_SPACE_ID)
assert(process.env.CONTENTFUL_ENVIRONMENT)
assert(process.env.CONTENTFUL_DELIVERY_ACCESS_TOKEN)
assert(process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN)

const httpLink = new HttpLink({
	uri: `${process.env.CONTENTFUL_API_BASE_URL}${process.env.CONTENTFUL_API_ENDPOINT}${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.CONTENTFUL_ENVIRONMENT}`,
})

const authLink = new ApolloLink((operation, forward) => {
	const token = process.env.CONTENTFUL_DELIVERY_ACCESS_TOKEN

	operation.setContext({
		headers: {
			authorization: token ? `Bearer ${token}` : '',
		},
	})

	return forward(operation)
})

const { getClient } = registerApolloClient(
	() =>
		new ApolloClient({
			cache: new InMemoryCache(),
			link: authLink.concat(httpLink),
		}),
)

export default getClient
