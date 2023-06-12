'use client'

import React from 'react'

import type { ContentfulLivePreviewInitConfig } from '@contentful/live-preview'
import { ContentfulLivePreviewProvider } from '@contentful/live-preview/react'
import type { ReactNode } from 'react'

type ProviderProps = {
	children: ReactNode
} & ContentfulLivePreviewInitConfig

export default function ContentfulLivePreviewProviderClient(props: ProviderProps) {
	return <ContentfulLivePreviewProvider {...props} />
}
