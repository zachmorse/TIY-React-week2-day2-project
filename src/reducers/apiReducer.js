export const FETCH_INITIATE = 'FETCH_INITIATE'
export const FETCH_SUCCESS = 'FETCH_SUCCESS'
export const FETCH_ERROR = 'FETCH_ERROR'

export const INITIAL_STATE = {
    loading: false,
    images: [],
    error: false,
    errorMessage: '',
}

export const apiReducer = (state, action) => {
    switch (action.type) {
        case FETCH_INITIATE:
            return { ...state, loading: true, error: false }
        case FETCH_SUCCESS:
            return { ...state, loading: false, images: action.payload }
        case FETCH_ERROR:
            return { ...state, loading: false, images: [], error: true, errorMessage: action.payload }
        default:
            throw new Error(`Unknown action type: ${action.type}`)
    }
}
