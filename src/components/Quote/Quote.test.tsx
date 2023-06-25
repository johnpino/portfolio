import React from 'react'

import { render } from '@testing-library/react'

import QuoteSkeleton from './Quote.skeleton'
import QuoteMock from './Quote.mocks'

describe('Quote', () => {
	test('should render', () => {
		render(<QuoteSkeleton {...QuoteMock} />)
	})
})
