import Player from '../pages/Player'

const EnhancedPlayer = () => {
	const song = {
		artist: res.results.artist,
		name: res.results.name,
		downloadUrl: res.results.downloadUrl[4].link,
		image: res.results.image[2].link
	}
	return (
		<div>
			<Player song={song} />
		</div>
	)
}
export default EnhancedPlayer
