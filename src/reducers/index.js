import {combineReducers} from 'redux'
import homeReducer from './homeReducer'
import jobReducer from './jobReducer'

const reducerApp = combineReducers({homeReducer, jobReducer})

export default reducerApp