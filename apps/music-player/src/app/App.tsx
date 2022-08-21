import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import EnhancedAlbum from './containers/EnhancedAlbum'
import EnhancedDetail from './containers/EnhancedDetail'
import EnhancedPlayer from './containers/EnhancedPlayer'
import EnhancedSearch from './containers/EnhancedSearch'
import EnhancedSongList from './containers/EnhancedSongList'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Footer />} path='/'>
					<Route element={<Home />} path='/' />
					<Route element={<EnhancedSongList />} path='/list' />
					{/* Album / Playlist Details page with Disk Cover */}
					<Route element={<EnhancedDetail />} path='/details' />
					<Route element={<EnhancedAlbum />} path='/album' />
					<Route element={<NotFound />} path='/404' />
					<Route element={<EnhancedSearch />} path='/search' />
					<Route element={<EnhancedPlayer />} path='/player' />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
