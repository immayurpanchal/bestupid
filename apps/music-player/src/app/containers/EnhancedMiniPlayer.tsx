import { MiniPlayer } from '@bestupid/core'
import { useAtom } from 'jotai'
import useSWR from 'swr'
import { currentSongId } from '../store'

type Props = {
	isVisible?: boolean
}

const EnhancedMiniPlayer = (props: Props) => {
	const { isVisible = true } = props

	const [id] = useAtom(currentSongId)

	const { data, error } = useSWR(`https://saavn.me/songs?id=${id}`)

	if (error) {
		return <div>failed to load</div>
	}

	if (!data) {
		return <div>Loading...</div>
	}

	const currentSong = {
		id: data.id,
		artist: data.artist,
		name: data.name,
		downloadUrl: data.downloadUrl,
		image: data.image
	}

	const onTrackComplete = () => {
		// setCurrentSong(songs[1])
	}

	if (!currentSong) {
		return null
	}

	return (
		<MiniPlayer
			key={currentSong.id}
			artist={currentSong.artist}
			image={currentSong.image[2].link}
			isVisible={isVisible}
			title={currentSong.name}
			trackSrc={currentSong.downloadUrl[4].link}
			onTrackComplete={onTrackComplete}
		/>
	)
}

export default EnhancedMiniPlayer
