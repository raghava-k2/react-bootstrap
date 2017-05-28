let counter=0
const addClient = (name) => {
    return {
        id: counter++,
        clientId: name
    }
}

const searchClientReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_CLIENT':
            return [...state, addClient(action.value)]
        default: return state
    }
}
export default searchClientReducer