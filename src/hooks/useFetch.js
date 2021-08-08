import { useState, useEffect } from 'react'

export default function useFetch(url) {
	const [data, setData] = useState(null)
	const [error, setError] = useState(null)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true)

			try {
				const res = await fetch(url)
				const data = await res.json()

				setData(data)
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
