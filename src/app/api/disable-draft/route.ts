import { draftMode } from 'next/headers'

export default async function GET() {
	draftMode().disable()
	return new Response('Draft mode is disabled')
}
