import { BackChevron, Button, Keyboard as KeyboardIcon, SearchIcon } from '@bestupid/core'
import { useAtom } from 'jotai'
import { useRef, useState } from 'react'
import useSWR from 'swr'
import { currentSongId } from '../store'
import { Song } from '../types/song'

const SearchPage = () => {
	const inputRef = useRef<HTMLInputElement>(null)

	const [, setCurrentSongId] = useAtom(currentSongId)
	const [searchValue, setSearchValue] = useState('')
	const { data, error } = useSWR(searchValue ? `https://saavn.me/search/songs?query=${searchValue}&page=1&limit=5` : '')

	if (error) {
		return <div>failed to load</div>
	}

	if (!data && !error) {
		return <div>loading...</div>
	}

	return (
		<div className='flex grid-flow-row flex-col gap-y-7'>
			<div className='flex items-center justify-between'>
				<Button shape='circle' onClick={() => window.history.back()}>
					<BackChevron fillClassName='fill-dark-100' />
				</Button>
				<span className='text-2xl font-semibold'>Search</span>
				<Button>
					<KeyboardIcon />
				</Button>
			</div>
			<div className='relative'>
				<span className='text-gray-500 pointer-events-none absolute inset-y-4 pl-6 sm:text-sm'>
					<SearchIcon fillClassName='fill-dark-100' />
				</span>
				<form
					onSubmit={e => {
						e.preventDefault()
						setSearchValue(inputRef.current?.value || '')
					}}
				>
					<input
						ref={inputRef}
						className='bg-transparent neumorphism w-full rounded-2xl py-3 pl-14 pr-4 text-lg placeholder:text-dark-100 focus-visible:outline-0 '
						placeholder='Search Your Music'
						type='search'
					/>
				</form>
			</div>
			<span className='text-lg text-dark-100'>Recently Searched</span>
			<div className='flex flex-col gap-10'>
				{data.map((song: Song) => {
					const { image, name, id, year } = song
					return (
						<div
							key={id}
							className='flex items-center gap-3'
							onClick={() => {
								setCurrentSongId(song.id)
							}}
						>
							<img
								alt={name}
								className={'row-span-2 mx-4 h-[60px] w-[60px] rotate-45 rounded-xl bg-cover'}
								src={image?.[2]?.link}
							/>
							<div className='flex flex-col'>
								<span className='text-base'>{name}</span>
								<span className='text-xs text-dark-100'>{year}</span>
							</div>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default SearchPage
