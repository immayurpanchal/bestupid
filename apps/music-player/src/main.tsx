import { StrictMode } from 'react'
import * as ReactDOM from 'react-dom/client'
import { SWRConfig } from 'swr'

import App from './app/App'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

const fetcher = (url: string) =>
	fetch(url)
		.then(r => r.json())
		.then(r => r.results)

root.render(
	<StrictMode>
		<SWRConfig value={{ fetcher: fetcher }}>
			<App />
		</SWRConfig>
	</StrictMode>
)
