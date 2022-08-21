import { useAtom } from 'jotai'
import { isEmpty } from 'lodash-es'
import SongList from '../pages/SongList'
import { songList } from '../store'

const EnhancedSongList = () => {
	// use this component to render the playback songs list
	const [songs] = useAtom(songList)

	if (isEmpty(songs)) {
		return <div>No songs found</div>
	}

	return <SongList songs={songs} />
}

export default EnhancedSongList
