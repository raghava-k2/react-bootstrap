const googleSearch = (state = {
    isFetching: false,
    data: []
}, action) => {
    switch (action.type) {
        case 'FETCH_SEARCH_POST_REQUEST':
            return Object.assign({}, state, {
                isFetching: action.isFetching
            })
        case 'FETCH_SEARCH_POST_RESPONSE':
            return Object.assign({}, state, {
                isFetching: action.isFetching,
                data: [...action.data]
            })
        default: return state
    }
}

export default googleSearch