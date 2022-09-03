import { useAtom } from 'jotai'
import React, { useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import useSWR from 'swr'
import Player from '../pages/Player'
import { currentSongId } from '../store'

const EnhancedPlayer = () => {
	const playerRef = useOutletContext() as React.MutableRefObject<HTMLAudioElement>
	const [id] = useAtom(currentSongId)

	const [isPlaying, setIsPlaying] = useState(playerRef.current ? playerRef.current.paused : false)

	const { data, error } = useSWR(`https://saavn.me/songs?id=${id}`)

	if (error) {
		return <div>failed to load</div>
	}

	if (!data) {
		return <div>Loading...</div>
	}

	const onPlay = () => {
		if (playerRef.current) {
			playerRef.current.play()
			setIsPlaying(true)
		}
	}

	const onPause = () => {
		if (playerRef.current) {
			playerRef.current.pause()
			setIsPlaying(false)
		}
	}

	const handleNext = () => {
		console.warn('next')
	}

	const handlePrevious = () => {
		console.warn('previous')
	}

	const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (playerRef.current) {
			playerRef.current.volume = +Number(+e.target.value / 100).toFixed(2)
		}
	}

	const playerProps = {
		artist: data.artist,
		name: data.name,
		trackSrc: data.downloadUrl[4].link,
		image: data.image[2].link,
		onPlay,
		onPause,
		handleVolumeChange,
		handleNext,
		handlePrevious,
		isPlaying
	}

	return (
		<div>
			<Player {...playerProps} />
		</div>
	)
}
export default EnhancedPlayer
