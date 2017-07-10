export const jobReducer = (state = {
    show: false
}, action) => {
    switch (action.type) {
        case 'SHOW_DIALOG':
            return {show: action.show}
        default:
            return state
    }
}

export const jobDetailsReducer = (state = {
    fileSpec: '',
    mapName: '',
    payroll: '',
    outputFile: '',
    outputFileName: ''
}, action) => {
    switch (action.type) {
        case 'ADD_FILE_SPEC_DETAILS':
            return Object.assign({}, state, {fileSpec: action.value})
        case 'ADD_MAP_DETAILS':
            return Object.assign({}, state, {mapName: action.value})
        case 'ADD_PAYROLL_DETAILS':
            return Object.assign({}, state, {payroll: action.value})
        case 'ADD_OUTPUT_FILE_DETAILS':
            return Object.assign({}, state, {outputFile: action.value})
        case 'ADD_OUTPUT_FILE_NAME_DETAILS':
            return Object.assign({}, state, {outputFileName: action.value})
        default:
            return state
    }
}