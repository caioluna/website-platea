import { useState, useEffect } from 'react'

export default function useFetch(url) {
	const [data, setData] = useState([])
	const [error, setError] = useState(null)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true)

			try {
				const res = await fetch(url)
				const json = await res.json()

				setData(json)
				setLoading(false)
			} catch (error) {
				setError(error)
				setLoading(false)
			}
		}

		fetchData()
	}, [url])

	return { data, error, loading }
}
