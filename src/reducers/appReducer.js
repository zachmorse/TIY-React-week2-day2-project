export const UPDATE_STATE = 'UPDATE_STATE'

export const INITIAL_APP_STATE = {
    rover: 'Curiosity',
    camera: 'FHAZ',
    sol: 1000,
}

export const appReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_STATE:
            return { ...state, [action.key]: action.payload }
        default:
            return state
    }
}
