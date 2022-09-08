import { useEffect, useState } from 'react'

const API_KEY = 'hyDqMegXSkTyGrRiTig8OId4IuijcF4WoTKGLZdK'
const API_BASE_URL = 'https://api.nasa.gov/mars-photos/api/v1/rovers'

export const useApi = (rover, camera, sol) => {
    const [hookImages, setHookImages] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch(`${API_BASE_URL}/${rover}/photos?sol=${sol}&camera=${camera}&api_key=${API_KEY}`)
            .then(response => response.json())
            .then(data => {
                setHookImages(data.photos)
                setLoading(false)
            })
    }, [rover, camera, sol])

    return { hookImages, loading }
}
