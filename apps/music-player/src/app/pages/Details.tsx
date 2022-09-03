import { BackChevron, Button, Disk, More, Playlist, Typography } from '@bestupid/core'
import { useAtom } from 'jotai'
import { useNavigate } from 'react-router-dom'
import { currentSongId, songList } from '../store'

import { Song } from '../types/song'
import { getMins, getValueInK } from '../utils/utils'

type DetailProps = {
	songs: Song[]
	coverImage: string
	coverTitle: string
	coverFanCount: number
}

const Details = (props: DetailProps) => {
	const [, setCurrentSongId] = useAtom(currentSongId)
	const [, setCurrentSongList] = useAtom(songList)
	const navigate = useNavigate()

	const { songs, coverImage, coverTitle, coverFanCount } = props
	const imageUrl = coverImage

	const handlePlayAll = () => {
		setCurrentSongList(songs)
		setCurrentSongId(songs[0].id)
	}

	return (
		<div>
			{/* Header */}
			<div className='flex items-center justify-between'>
				<Button shape='circle' onClick={() => window.history.back()}>
					<BackChevron fillClassName='fill-dark-100' />
				</Button>
				<span className='text-2xl'>Now Playing</span>
				<div className='flex gap-x-3 '>
					<Button onClick={() => null}>
						<Playlist fillClassName='fill-dark-100' />
					</Button>
					<Button className='h-6 w-6' onClick={() => null}>
						<More fillClassName='fill-dark-100' />
					</Button>
				</div>
			</div>
			{/* Cover Image section */}
			<div className='relative h-72 w-full py-5'>
				<Disk className='absolute top-[calc(50%-104px)] left-1/3 h-52 w-52' image={imageUrl} />
				<div
					className='absolute z-10 h-60 w-60 rounded-xl bg-cover'
					style={{ backgroundImage: `url(${imageUrl})` }}
				></div>
			</div>
			{/* Cover Details */}
			<div className='flex flex-col'>
				<Typography type='subtitle'>{coverTitle}</Typography>
				<Typography className='gap-y-1  text-sm text-dark-100' type='caption'>
					{getValueInK(coverFanCount)}
				</Typography>
			</div>
			<div className='flex justify-between'>
				<Button shape='square'>Shuffle</Button>
				<Button shape='square' variant='primary' onClick={handlePlayAll}>
					Play All
				</Button>
			</div>
			{/* Track List */}
			<div>
				<Typography type='subtitle'>Songs</Typography>
				<div className='grid gap-y-3'>
					{songs.map((song, index) => (
						<div
							key={index}
							className='grid grid-cols-[auto_minmax(187px,_1fr)_auto] gap-x-4'
							onClick={() => {
								setCurrentSongList(prevSongs => [song, ...prevSongs])
								setCurrentSongId(song.id)
								navigate('/player')
							}}
						>
							<Typography>{(index + 1).toString().padStart(2, '0')}</Typography>
							<div className='flex flex-col'>
								<Typography type='caption'>{song.name}</Typography>
								<Typography className='text-dark-100' type='subCaption'>
									{getMins(Number(song.duration))}
								</Typography>
							</div>
							<Button className='h-6 w-6'>
								<More fillClassName='fill-dark-100' />
							</Button>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default Details
