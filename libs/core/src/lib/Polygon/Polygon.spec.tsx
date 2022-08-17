import { render } from '@testing-library/react'

import Polygon from './Polygon'

describe('Polygon', () => {
	it('should render successfully', () => {
		const { baseElement } = render(<Polygon />)
		expect(baseElement).toBeTruthy()
	})
})
