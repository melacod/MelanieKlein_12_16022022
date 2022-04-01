import { useEffect, useState } from 'react'

/**
 * Hooks to fetch data or use mock data and then transform received data
 * @function useFetch
 * @param {string} url url to fecth data from
 * @param {function} DataTransformer function used to transform received data
 * @param {object} dataMock mock data
 * @returns the transformed recevied data
 * @category Utils
 */
export function useFetch(url, DataTransformer, dataMock) {
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
                let receivedData

                if (dataMock) {
                    receivedData = dataMock
                } else {
                    const response = await fetch(url)
                    receivedData = await response.json()
                }

                if (DataTransformer) {
                    receivedData = DataTransformer(receivedData)
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
    }, [url, DataTransformer, dataMock])

    return { loading, data, error, exception }
}
