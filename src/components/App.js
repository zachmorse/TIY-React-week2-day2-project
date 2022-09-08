import React, { useState } from 'react'
import { useDebounce } from 'use-debounce'
import GetImageForm from './GetImageForm'
import ImageDisplay from './ImageDisplay'

import { useApi } from '../hooks/useApi'

const style = {
    headerStyle: {
        textAlign: 'center',
        fontSize: 100,
        fontWeight: 'bold',
        margin: '0rem',
    },
}

const App = () => {
    const [rover, setRover] = useState('Curiosity')
    const [camera, setCamera] = useState('FHAZ')
    const [sol, setSol] = useState(1000)
    const [debouncedSolValue] = useDebounce(sol, 1000)

    const { hookImages, loading } = useApi(rover, camera, debouncedSolValue)

    console.log(sol)

    return (
        <div>
            <h1 style={style.headerStyle}>MARS ROVER API</h1>
            <GetImageForm
                rover={rover}
                setRover={setRover}
                camera={camera}
                setCamera={setCamera}
                sol={sol}
                setSol={setSol}
            />
            <ImageDisplay images={hookImages} loading={loading} />
        </div>
    )
}

export default App
