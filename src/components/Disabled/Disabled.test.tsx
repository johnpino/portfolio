import React from 'react'

import { render, screen } from '@testing-library/react'

import DisabledSkeleton from './Disabled.skeleton'
import DisabledMock from './Disabled.mocks'

describe('Disabled', () => {
	test('should render', () => {
		render(<DisabledSkeleton {...DisabledMock} />)

		expect(screen.getByText('From the Desk of')).toBeInTheDocument()
		expect(screen.getByText('John Pino')).toBeInTheDocument()
		expect(screen.getByText('Frontend Development')).toBeInTheDocument()
		expect(screen.getByText('Under development')).toBeInTheDocument()
	})
})
