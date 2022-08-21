import { AlbumIcon, Artists, Playlist, Polygon, Songs } from '@bestupid/core'
import classNames from 'classnames'
import { useState } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import EnhancedMiniPlayer from '../../containers/EnhancedMiniPlayer'

const Footer = () => {
	const navigate = useNavigate()
	const location = useLocation()
	const [selectedPage, setSelectedPage] = useState('')

	const handleClick = (page: string) => {
		navigate(`/${page}`)
		setSelectedPage(page)
	}

	// Higher Order Component
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const getSomething = (Icon: any, currentPage: string, extraProps = {}) => {
		const activeItemClassNames =
			'before:absolute before:top-0  before:block before:h-1 before:w-full before:rounded-b-md before:bg-dark-900'

		const borderTopClassNames = classNames('relative top-0 flex items-center justify-center', {
			[activeItemClassNames]: currentPage === selectedPage
		})

		const fillClassName = classNames(
			{ 'fill-dark-900': currentPage === selectedPage },
			{ 'fill-dark-100/50': currentPage !== selectedPage }
		)

		return (
			<div className={borderTopClassNames}>
				{<Icon fillClassName={fillClassName} onClick={() => handleClick(currentPage)} {...extraProps} />}
			</div>
		)
	}

	const getIsMiniPlayerVisible = () => {
		return location.pathname === '/player' || location.pathname === '/search'
	}

	return (
		<>
			<div className='mb-48'>
				<Outlet />
			</div>
			<div className='fixed bottom-0 w-full'>
				<EnhancedMiniPlayer isVisible={getIsMiniPlayerVisible()} />
				<div className='grid grid-cols-5  bg-grey-50 p-3 '>
					{getSomething(
						() => (
							<Polygon
								id='footer-avatar'
								image='https://c.saavncdn.com/editorial/logo/JhakaasRemakes_20220105155217.jpg'
							/>
						),
						'home'
					)}
					{getSomething(Songs, 'list')}
					{getSomething(AlbumIcon, 'album')}
					{getSomething(Artists, '')}
					{getSomething(Playlist, '')}
				</div>
			</div>
		</>
	)
}
export default Footer
