const initialState = {
    loading: false,
    data: undefined,
    error: undefined,
}

export const searchUniversityReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SEARCH_UNIVERSITY_START':
            return {
                ...state,
                loading: true,
            }
        case 'SEARCH_UNIVERSITY_SUCCESS':
            return {
                ...state,
                loading: false,
                data: action.payload,
            }
        case 'SEARCH_UNIVERSITY_FAIL':
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        default:
            return state;
    }
}