import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from '../reducers'

const configStore = () => { return createStore(reducers, applyMiddleware(thunk)) }
export default configStore