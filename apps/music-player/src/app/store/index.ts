import { atom } from 'jotai'
import { Song } from '../types/song'

export const songList = atom([] as Song[])
export const currentSongId = atom('')
