import { useEffect, useReducer } from 'react'
import { FETCH_INITIATE, FETCH_SUCCESS, FETCH_ERROR, INITIAL_STATE } from '../reducers/apiReducer'

const API_KEY = 'hyDqMegXSkTyGrRiTig8OId4IuijcF4WoTKGLZdK'
const API_BASE_URL = 'https://api.nasa.gov/mars-photos/api/v1/rovers'

export const useApi = (rover, camera, sol, reducer) => {
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE)

    useEffect(() => {
        dispatch({ type: FETCH_INITIATE })
        fetch(`${API_BASE_URL}/${rover}/photos?sol=${sol}&camera=${camera}&api_key=${API_KEY}`)
            .then(response => response.json())
            .then(data => dispatch({ type: FETCH_SUCCESS, payload: data.photos }))
            .catch(err => {
                dispatch({ type: FETCH_ERROR, payload: err })
                console.log(err)
            })
    }, [rover, camera, sol])

    return state
}
