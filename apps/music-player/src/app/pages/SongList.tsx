import { Button, More, Polygon } from '@bestupid/core'

import { Song } from '../types/song'

type Props = {
	songs: Song[]
	onTrackSelect: (song: Song) => void
}

const SongList = (props: Props) => {
	const { songs, onTrackSelect } = props
	return (
		<>
			{songs.map((currentSong: Song) => {
				const { name, image, id, year } = currentSong
				return (
					<div
						key={id}
						className='grid grid-cols-[auto_minmax(100px,_1fr)_auto] items-center gap-x-3 rounded-2xl p-3 '
						onClick={() => onTrackSelect(currentSong)}
					>
						<Polygon id={id} image={image?.[2]?.link || ''} />
						<div className='flex flex-col'>
							{/* TODO: Use Typography component  */}
							<span className='truncate'>{name}</span>
							<span className='text-dark-100'>{year}</span>
						</div>
						<Button className='h-6 w-6'>
							<More fillClassName='fill-dark-100' />
						</Button>
					</div>
				)
			})}
		</>
	)
}

export default SongList
