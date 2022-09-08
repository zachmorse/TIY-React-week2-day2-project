import React from 'react'

const style = {
    formStyle: {
        textAlign: 'center',
    },
    labelStyle: {
        margin: 5,
    },
    selectStyle: {
        borderRadius: 4,
        backgroundColor: 'black',
        color: '#3cbc8d',
    },
}

const GetImageForm = ({ rover, setRover, camera, setCamera, sol, setSol }) => {
    return (
        <div>
            <form style={style.formStyle}>
                <label style={style.labelStyle} htmlFor='rover'>
                    Rover
                </label>
                <select style={style.selectStyle} onChange={e => setRover(e.target.value)} value={rover}>
                    <option value='Curiosity'>Curiosity</option>
                    <option value='Opportunity'>Opportunity</option>
                    <option value='Spirit'>Spirit</option>
                </select>
                <label style={style.labelStyle} htmlFor='camera'>
                    Camera Type
                </label>
                <select style={style.selectStyle} onChange={e => setCamera(e.target.value)} value={camera}>
                    <option value='fhaz'>FHAZ (Front Hazard)</option>
                    <option value='rhaz'>RHAZ (Rear Hazard)</option>
                    <option value='navcam'>NAVCAM (Navigation Cam)</option>
                </select>
                <label style={style.labelStyle} htmlFor='sol'>
                    Martian Sol: 1000-2000
                </label>
                <input
                    style={style.selectStyle}
                    type='number'
                    onChange={e => setSol(e.target.value)}
                    max={2000}
                    min={1000}
                    value={sol}
                />
            </form>
        </div>
    )
}

export default GetImageForm
