import axios from 'axios'

export const searchUniversityAction = (name) => {
    return async (dispatch) => {
        dispatch({
            type: 'SEARCH_UNIVERSITY_START',
        })
        axios.get(`http://universities.hipolabs.com/search?name=${name}`)
            .then(result => {
                dispatch({
                    type: 'SEARCH_UNIVERSITY_SUCCESS',
                    payload: result.data
                })
            })
            .catch(error => {
                dispatch({
                    type: 'SEARCH_UNIVERSITY_FAIL',
                    payload: error
                })
            })
    }

}