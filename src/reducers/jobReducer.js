const jobReducer = (state = {
    show: false
}, action) => {
    switch (action.type) {
        case 'SHOW_DIALOG':
            return {show: action.show}
        default:
            return state
    }
}
export default jobReducer