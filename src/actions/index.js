import fetch from 'isomorphic-fetch'

const searchClientAction = (value) => {
    return {
        type: 'ADD_CLIENT',
        value
    }
}

const requestPost = (flag) => {
    return {
        type: 'FETCH_SEARCH_POST_REQUEST',
        isFetching: flag
    }
}

const responsePost = (flag, json) => {
    console.log(json.data)
    return {
        type: 'FETCH_SEARCH_POST_RESPONSE',
        isFetching: flag,
        data: json.data.children.map(child => child.data)
    }
}

const fetchSearchResult = (searchValue) => {
    return dispatch => {
        dispatch(requestPost(true))
        fetch(`https://www.reddit.com/r/${searchValue}.json`).then(response => response.json())
            .then(json => dispatch(responsePost(false, json)))
    }
}

export const fetchResults = function (search) {
    return (dispatch, getState) => dispatch(fetchSearchResult(encodeURI(search)))
}

export default searchClientAction