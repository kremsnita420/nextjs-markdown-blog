import { useState, useEffect } from 'react'
import SearchResults from './SearchResults'

export default function Search() {
	const [searchTerm, setSearchTerm] = useState('')
	const [searchResults, setSearchResults] = useState([])

	useEffect(() => {
		const getResults = async () => {
			if (searchTerm === '') {
				setSearchResults([])
			} else {
				const res = await fetch(`/api/search?q=${searchTerm}`)
				const { results } = await res.json()
				setSearchResults(results)
			}
		}

		getResults()
	}, [searchTerm])

	return (
		<div className='relative bg-gray-600 p-2'>
			<div className='container mx-auto flex items-center justify-center md:justify-end'>
				<div className='relative text-gray-600 w-72'>
					<form>
						<input
							type='search'
							name='search'
							id='search'
							className='searchField'
							value={searchTerm}
							onChange={(e) => setSearchTerm(e.target.value)}
							placeholder='Search...'
						/>
					</form>
				</div>
			</div>

			<SearchResults results={searchResults} />
		</div>
	)
}
