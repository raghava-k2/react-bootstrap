import { combineReducers } from 'redux'
import searchClientReducer from './searchClientReducer'
import googleSearch from './googleSearch'
const reducers = combineReducers({
    searchClientReducer,
    googleSearch
})
export default reducers