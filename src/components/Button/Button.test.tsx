import React from 'react'

import { render } from '@testing-library/react'

import ButtonSkeleton from './Button.skeleton'
import ButtonMock from './Button.mocks'

describe('Button', () => {
	test('should render', () => {
		render(<ButtonSkeleton {...ButtonMock} />)
	})
})
