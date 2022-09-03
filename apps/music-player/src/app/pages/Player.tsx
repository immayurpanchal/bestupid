import {
	BackChevron,
	Button,
	Disk,
	Heart,
	More,
	Mute,
	Next,
	Pause,
	Play,
	Playlist,
	Previous,
	Random,
	Repeat,
	Volume
} from '@bestupid/core'
import { useNavigate } from 'react-router-dom'

export type PlayerProps = {
	artist: string
	name: string
	image: string
	onPlay: () => void
	onPause: () => void
	handleVolumeChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	handleNext: () => void
	handlePrevious: () => void
	isPlaying: boolean
}

const Player = (props: PlayerProps) => {
	const { artist, name, image, onPlay, isPlaying, onPause, handleNext, handlePrevious, handleVolumeChange } = props
	const navigate = useNavigate()

	const handlePlaylistMenu = () => {
		navigate('/list')
	}

	const handleMore = () => {
		console.warn('playlist menu')
	}

	return (
		<div className='grid gap-y-16'>
			<div className='flex items-center justify-between'>
				<Button shape='circle' onClick={() => window.history.back()}>
					<BackChevron fillClassName='fill-dark-100' />
				</Button>
				<span className='text-2xl'>Now Playing</span>
				<div className='flex gap-x-3'>
					<Button onClick={handlePlaylistMenu}>
						<Playlist fillClassName='fill-dark-100' />
					</Button>
					<Button className='h-6 w-6' onClick={handleMore}>
						<More fillClassName='fill-dark-100' />
					</Button>
				</div>
			</div>
			<div className='justify-self-center'>
				<div className='relative'>
					<Disk image={image || ''} />
				</div>
			</div>
			<div className='flex flex-col text-center'>
				<span className='text-xl'>{name}</span>
				<span className='text-xs'>{artist}</span>
			</div>
			<div className='flex items-center justify-center gap-x-4'>
				<Button shape='circle' onClick={handlePrevious}>
					<Previous fillClassName='fill-dark-100' />
				</Button>
				{!isPlaying && (
					<Button shape='circle' size='large' onClick={onPlay}>
						<Play fillClassName='fill-dark-100' />
					</Button>
				)}
				{isPlaying && (
					<Button action='pressed' shape='circle' size='large' onClick={onPause}>
						<Pause fillClassName='fill-dark-900' />
					</Button>
				)}
				<Button shape='circle' onClick={handleNext}>
					<Next fillClassName='fill-dark-100' />
				</Button>
			</div>
			<div className='flex items-center justify-between gap-x-3'>
				<Mute className='h-6 w-6' fillClassName='fill-dark-100' />
				<input id='volume' name='volume' type='range' onChange={handleVolumeChange} />
				<Volume className='h-6 w-6' fillClassName='fill-dark-100' />
			</div>
			<div className='flex justify-between'>
				<Button shape='circle'>
					<Heart />
				</Button>
				<Button shape='circle'>
					<Random />
				</Button>
				<Button shape='circle'>
					<Repeat />
				</Button>
			</div>
		</div>
	)
}

export default Player
