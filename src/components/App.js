import React, { useReducer } from 'react'
import { useDebounce } from 'use-debounce'
import ImageForm from './ImageForm'
import ImageDisplay from './ImageDisplay'

import { useApi } from '../hooks/useApi'
import { apiReducer } from '../reducers/apiReducer'
import { appReducer, INITIAL_APP_STATE, UPDATE_STATE } from '../reducers/appReducer'

const style = {
    headerStyle: {
        textAlign: 'center',
        fontSize: 100,
        fontWeight: 'bold',
        margin: '0rem',
    },
}

const App = () => {
    const [state, dispatch] = useReducer(appReducer, INITIAL_APP_STATE)
    const { rover, camera, sol } = state
    const [debouncedSolValue] = useDebounce(sol, 250)
    const { images, loading, error, errorMessage } = useApi(rover, camera, debouncedSolValue, apiReducer)

    const handleUpdate = (key, payload) => dispatch({ type: UPDATE_STATE, key, payload })

    return (
        <div>
            <h1 style={style.headerStyle}>MARS ROVER API</h1>
            <ImageForm rover={state.rover} camera={state.camera} sol={state.sol} handleUpdate={handleUpdate} />
            <ImageDisplay images={images} loading={loading} error={error} errorMessage={errorMessage} />
        </div>
    )
}

export default App
