import './globals.scss'
import { Inter } from 'next/font/google'

import React from 'react'

import ContentfulLivePreviewProviderClient from '@/providers/contentfulLivePreviewProviderClient'
import { draftMode } from 'next/headers'

import '@contentful/live-preview/style.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'John Pino | Frontend Development',
	description: 'John Pino - Frontend Development',
	viewport: {
		width: 'device-width',
		initialScale: 1,
	},
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	const { isEnabled: isDraftMode } = draftMode()

	return (
		<ContentfulLivePreviewProviderClient
			debugMode={isDraftMode}
			enableInspectorMode={isDraftMode}
			enableLiveUpdates={isDraftMode}
			locale="en-US"
		>
			<html lang="en">
				<body className={inter.className}>{children}</body>
			</html>
		</ContentfulLivePreviewProviderClient>
	)
}
