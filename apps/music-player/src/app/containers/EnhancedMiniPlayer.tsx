import { MiniPlayer } from '@bestupid/core'
import { useAtom } from 'jotai'
import { songList } from '../store'

const EnhancedMiniPlayer = () => {
	const [songs] = useAtom(songList)
	const currentSong = songs[0]

	if (!currentSong) {
		return null
	}

	return (
		<MiniPlayer
			key={currentSong.id}
			artist={currentSong.artist}
			image={currentSong.image[2].link}
			title={currentSong.name}
			trackSrc={currentSong.downloadUrl[4].link}
		/>
	)
}

export default EnhancedMiniPlayer
