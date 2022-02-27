import { useEffect, useState } from 'react'

// Hook sur la méthode fetch permettant de gérér
//  - Le chargement des données via l'état loading
//  - Les données renvoyées via l'état data
//  - Les erreurs lors de l'exécution vua les états error et exception
export function useFetch(url) {
    const [data, setData] = useState({})

    const [loading, setLoading] = useState(true)

    const [error, setError] = useState(false)
    const [exception, setException] = useState('')

    useEffect(() => {
        if (!url) return
        setLoading(true)

        async function fetchData() {
            try {
                // La ligne cid-dessous permet de simuler une attente de N secondes
                // Cela permet de tester le comportement de l'état loading
                await new Promise((r) => setTimeout(r, 2 * 1000))
                const response = await fetch(url)
                const receivedData = await response.json()
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
    }, [url])

    return { loading, data, error, exception }
}
