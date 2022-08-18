import { useLocation } from 'react-router-dom'
import SongList from '../pages/SongList'
import { Song } from '../types/song'
import { isEmpty } from 'lodash-es'

type Props = {
	songs: Song[]
}
const EnhancedSongList = () => {
	// use this component to render the playback songs list
	const location = useLocation()
	const { songs = [] } = location.state as Props

	if (isEmpty(songs)) {
		return <div>No songs found</div>
	}

	return <SongList songs={songs} />
}

export default EnhancedSongList
