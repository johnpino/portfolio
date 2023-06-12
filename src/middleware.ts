import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

/* import assert from 'assert'

assert(process.env.BACK_SOON) */

export function middleware(request: NextRequest) {
	return process.env.BACK_SOON === 'true' && request.nextUrl.pathname !== '/back-soon'
		? NextResponse.redirect(new URL('/back-soon', request.url))
		: NextResponse.next()
}

export const config = {
	matcher: [
		/*
		 * Match all request paths except for the ones starting with:
		 * - api (API routes)
		 * - _next/static (static files)
		 * - _next/image (image optimization files)
		 * - favicon.ico (favicon file)
		 */
		'/((?!api|_next/static|_next/image|favicon.ico).*)',
	],
}
