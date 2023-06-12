import { cookies, draftMode } from 'next/headers'
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

import getPage from '@/lib/getPage'

import assert from 'assert'

assert(process.env.CONTENTFUL_PREVIEW_SECRET)

export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
	const secret = request.nextUrl.searchParams.get('secret')
	const slug = request.nextUrl.searchParams.get('slug')

	// Check the secret and next parameters
	// This secret should only be known to this API route and Contentful
	if (secret !== process.env.CONTENTFUL_PREVIEW_SECRET || !slug) {
		return NextResponse.json({ error: 'Invalid Token' }, { status: 406 })
	}

	// Fetch the post to check if the provided `slug` exists
	const page = await getPage(slug, true)

	// Fetch the post to check if the provided `slug` exists
	// If the slug doesn't exist prevent draft mode from being enabled
	if (!page) {
		return NextResponse.json({ error: 'Invalid slug' }, { status: 406 })
	}

	// Enable Draft Mode by setting the cookie
	draftMode().enable()

	// Add extra properties to draftMode cookie
	const draftModeCookie = cookies().get('__prerender_bypass')?.value

	if (draftModeCookie)
		cookies().set('__prerender_bypass', draftModeCookie, { sameSite: 'none', secure: true, httpOnly: true })

	// Redirect to the path from the fetched post
	// We don't redirect to searchParams.slug as that might lead to open redirect vulnerabilities
	const url: string = page.slug

	return NextResponse.redirect(new URL(url, request.nextUrl.origin))
}
