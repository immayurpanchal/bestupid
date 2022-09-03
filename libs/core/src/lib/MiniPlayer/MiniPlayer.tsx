// @ts-nocheck

import classNames from 'classnames'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../Button/Button'
import Pause from '../Icons/Pause'
import Play from '../Icons/Play'
import Polygon from '../Polygon/Polygon'
import Slider from '../Slider/Slider'
import Typography from '../Typography/Typography'

type MiniPlayerProps = {
	image: string
	title: string
	artist: string
	trackSrc: string
	onTrackComplete: () => void
	isVisible?: boolean
	playerRef?: React.RefObject<HTMLAudioElement>
	isPlaying?: boolean
}

const MiniPlayer = React.forwardRef((props: MiniPlayerProps, playerRef: React.ForwardedRef<HTMLAudioElement>) => {
	const { image, title, artist, trackSrc, onTrackComplete, isVisible, isPlaying } = props
	const [progress, setProgress] = useState(0)

	const navigate = useNavigate()

	const onTimeUpdate = () => {
		if (playerRef.current) {
			const { current } = playerRef
			const { duration } = current
			const progress = (current.currentTime / duration) * 100
			setProgress(progress)
		}
	}

	const handleButtonClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
		e.stopPropagation()
		if (playerRef?.current) {
			const { current } = playerRef
			if (current.paused) {
				current.play()
			} else {
				current.pause()
			}
		}
	}

	const onMiniPlayerWrapperClick = () => {
		navigate('/player')
	}

	useEffect(() => {
		if (playerRef.current) {
			playerRef.current.play()
		}
	}, [trackSrc])

	useEffect(() => {
		if (progress >= 100) {
			onTrackComplete()
		}
	}, [progress])

	const miniPlayerClass = classNames('neumorphism flex grow items-center	justify-between	rounded-t-3xl px-5 py-3', {
		invisible: isVisible
	})

	return (
		<div className={miniPlayerClass} onClick={onMiniPlayerWrapperClick}>
			<audio ref={playerRef} src={trackSrc} onTimeUpdate={onTimeUpdate} />
			<Polygon className='shrink-0' height='100%' id='mini-player-img' image={image} />
			<div className='flex flex-col  gap-y-2'>
				<Typography className='truncate w-56'>{title}</Typography>
				<Typography className='text-dark-100 truncate w-56' type='subCaption'>
					{artist}
				</Typography>
				<Slider currentProgressClassName='bg-skin-100' percent={progress} />
			</div>
			{isPlaying && (
				<Button action='pressed' className='shrink-0' shape='circle' onClick={handleButtonClick}>
					<Pause fillClassName='fill-dark-100' />
				</Button>
			)}
			{!isPlaying && (
				<Button className='shrink-0' shape='circle' onClick={handleButtonClick}>
					<Play fillClassName='fill-dark-100' />
				</Button>
			)}
		</div>
	)
})
export default MiniPlayer
