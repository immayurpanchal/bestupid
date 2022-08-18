export interface ImageEntityOrDownloadUrlEntity {
	quality: string
	link: string
}

export interface Album {
	id: string
	name: string
	url: string
}

export type ImageArray = [
	{
		quality: '50x50'
		link: string
	},
	{
		quality: '150x150'
		link: string
	},
	{
		quality: '500x500'
		link: string
	}
]

type downloadUrlArray = [
	{
		quality: '12kbps'
		link: string
	},
	{
		quality: '48kbps'
		link: string
	},
	{
		quality: '96kbps'
		link: string
	},
	{
		quality: '160kbps'
		link: string
	},
	{
		quality: '320kbps'
		link: string
	}
]
export interface Song {
	id: string
	name: string
	album: {
		id: string
		name: string
		url: string
	}
	year: string // 2022
	releaseDate: Date // '2022-01-20'
	duration: number // 185 seconds
	label: string
	primaryArtists: string
	primaryArtistsId: number // 234423
	explicitContent: number
	playCount: number //'1205195'
	language: 'english'
	hasLyrics: boolean //  'false'
	artist: string
	image: ImageArray
	url: string
	copyright: string // '℗ 2022 Atlantic Records Group LLC'
	downloadUrl: downloadUrlArray
}
