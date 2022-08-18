import { useLocation } from 'react-router-dom'
import useSWR from 'swr'
import Player from '../pages/Player'

const EnhancedPlayer = () => {
	const { state } = useLocation()
	const { id } = state as { id: string }
	const { data, error } = useSWR(`https://saavn.me/songs?id=${id}`)

	if (error) {
		return <div>failed to load</div>
	}

	if (!data) {
		return <div>Loading...</div>
	}

	const song = {
		artist: data.artist,
		name: data.name,
		trackSrc: data.downloadUrl[4].link,
		image: data.image[2].link
	}

	return (
		<div>
			<Player {...song} />
		</div>
	)
}
export default EnhancedPlayer
