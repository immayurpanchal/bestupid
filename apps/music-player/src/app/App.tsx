import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Details from './pages/Details'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Player from './pages/Player'
import Search from './pages/Search'

export const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Search />} path='/search' />
				<Route element={<Home />} path='/' />
				<Route element={<Player />} path='/player' />
				<Route element={<Details />} path='/details' />
				<Route element={<NotFound />} path='/404' />
			</Routes>
		</BrowserRouter>
	)
}

export default App
