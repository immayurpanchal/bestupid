import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

export const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Home />} path='/' />
				<Route element={<NotFound />} path='/404' />
			</Routes>
		</BrowserRouter>
	)
}

export default App
