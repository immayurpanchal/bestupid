import { useLocation } from 'react-router-dom'
import useSWR from 'swr'
import Details from '../pages/Details'
import { ImageArray, Song } from '../types/song'

type DetailProps = {
	type: 'playlist' | 'album'
	id: string
}

type PlaylistOrAlbumType = {
	name: string
	image: ImageArray
	songs: Song[]
	fanCount: number
}

const EnhancedDetail = () => {
	const location = useLocation()
	const { type, id } = location.state as DetailProps

	const { data, error } = useSWR(
		type === 'playlist' ? `https://saavn.me/playlists?id=${id}` : `https://saavn.me/albums?id=${id}`
	)

	if (error) {
		return <div>failed to load</div>
	}

	if (!data) {
		return <div>Loading...</div>
	}

	const { name = '', image, songs = [], fanCount = 0 } = data as PlaylistOrAlbumType

	const imageUrl = image?.[2]?.link

	return <Details coverFanCount={fanCount} coverImage={imageUrl} coverTitle={name} songs={songs} />
}

export default EnhancedDetail
