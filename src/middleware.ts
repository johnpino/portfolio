import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
	const draftModeCookie = request.cookies.get('__d')

	if (request.nextUrl.pathname.startsWith('/draft')) {
		if (draftModeCookie?.value === process.env.BYPASS_BACK_SOON) {
			return NextResponse.next()
		}

		return NextResponse.redirect(new URL('/', request.url))
	}

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
