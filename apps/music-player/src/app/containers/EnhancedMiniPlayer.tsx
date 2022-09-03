import { MiniPlayer } from '@bestupid/core'
import { useAtom } from 'jotai'
import React from 'react'
import useSWR from 'swr'
import { currentSongId } from '../store'

type Props = {
	isVisible?: boolean
}

const EnhancedMiniPlayer = React.forwardRef((props: Props, playerRef: React.ForwardedRef<HTMLAudioElement>) => {
	const { isVisible = true } = props

	const [id] = useAtom(currentSongId)

	const { data, error } = useSWR(() => (id ? `https://saavn.me/songs?id=${id}` : null))

	if (error) {
		return <div>failed to load</div>
	}

	if (!id || !data) {
		return null
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

	return (
		<MiniPlayer
			key={currentSong.id}
			ref={playerRef}
			artist={currentSong.artist}
			image={currentSong.image[2].link}
			isVisible={isVisible}
			title={currentSong.name}
			trackSrc={currentSong.downloadUrl[4].link}
			onTrackComplete={onTrackComplete}
		/>
	)
})

export default EnhancedMiniPlayer
