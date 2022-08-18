import { render } from '@testing-library/react'

import Album from './Album'

describe('Album', () => {
	it('should render successfully', () => {
		const { baseElement } = render(<Album />)
		expect(baseElement).toBeTruthy()
	})
})
