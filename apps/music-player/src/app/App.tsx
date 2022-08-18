import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import EnhancedAlbum from './containers/EnhancedAlbum'
import EnhancedDetail from './containers/EnhancedDetail'
import EnhancedPlayer from './containers/EnhancedPlayer'
import EnhancedSongList from './containers/EnhancedSongList'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import SearchPage from './pages/Search'

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Footer />} path='/'>
					<Route element={<Home />} path='/home' />
					<Route element={<EnhancedSongList />} path='/list' />
					{/* Album / Playlist Details page with Disk Cover */}
					<Route element={<EnhancedDetail />} path='/details' />
					<Route element={<EnhancedAlbum />} path='/album' />
					<Route element={<NotFound />} path='/404' />
				</Route>
				<Route element={<SearchPage />} path='/search' />
				<Route element={<EnhancedPlayer />} path='/player' />
			</Routes>
		</BrowserRouter>
	)
}

export default App
