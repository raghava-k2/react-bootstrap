import {combineReducers} from 'redux'
import homeReducer from './homeReducer'

const reducerApp = combineReducers({homeReducer})

export default reducerApp