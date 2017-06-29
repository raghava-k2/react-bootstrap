import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

const configStore = () => {
    return createStore(applyMiddleware(thunk))
}
export default configStore
