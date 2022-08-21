import { useEffect, useRef, useState } from 'react'
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
}

const MiniPlayer = (props: MiniPlayerProps) => {
	const { image, title, artist, trackSrc, onTrackComplete } = props
	const playerRef = useRef<HTMLAudioElement>(null)
	const [progress, setProgress] = useState(0)
	const [isPlaying, setIsPlaying] = useState(false)

	const onTimeUpdate = () => {
		if (playerRef.current) {
			const { current } = playerRef
			const { duration } = current
			const progress = (current.currentTime / duration) * 100
			setProgress(progress)
		}
	}

	const handleButtonClick = () => {
		if (playerRef.current) {
			const { current } = playerRef
			if (current.paused) {
				setIsPlaying(true)
				current.play()
			} else {
				setIsPlaying(false)
				current.pause()
			}
		}
	}

	useEffect(() => {
		if (playerRef.current) {
			setIsPlaying(true)
			playerRef.current.play()
		}
	}, [trackSrc])

	useEffect(() => {
		if (progress >= 100) {
			onTrackComplete()
		}
	}, [progress])

	return (
		<div className='neumorphism flex grow items-center	justify-between	rounded-t-3xl px-5 py-3'>
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
}
export default MiniPlayer
