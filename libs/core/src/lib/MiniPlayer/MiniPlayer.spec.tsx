import { render } from '@testing-library/react'

import MiniPlayer from './MiniPlayer'

describe('MiniPlayer', () => {
	it('should render successfully', () => {
		const { baseElement } = render(<MiniPlayer />)
		expect(baseElement).toBeTruthy()
	})
})
