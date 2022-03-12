import { useEffect, useState } from 'react'

/**
 * Hooks to fetch data and transform received data
 * @function useFetch
 * @param {string} url url to fecth data from
 * @param {function} transformData function used to transform received data
 * @returns the transformed recevied data
 * @category Utils
 */
export function useFetch(url, transformData) {
    const [data, setData] = useState({})

    const [loading, setLoading] = useState(true)

    const [error, setError] = useState(false)
    const [exception, setException] = useState('')

    useEffect(() => {
        if (!url) return
        setLoading(true)

        async function fetchData() {
            try {
                // Simulate data loading to show loader
                await new Promise((r) => setTimeout(r, 1 * 1000))
                const response = await fetch(url)
                let receivedData = await response.json()
                if (transformData) {
                    receivedData = transformData(receivedData)
                }
                setData(receivedData)
            } catch (err) {
                //console.log(err)
                setError(true)
                setException(err)
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [url, transformData])

    return { loading, data, error, exception }
}
