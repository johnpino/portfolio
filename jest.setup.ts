import '@testing-library/jest-dom'

import { ContentfulLivePreview } from '@contentful/live-preview'

beforeAll(() => {
	ContentfulLivePreview.init({
		locale: 'en_US',
	})
})
