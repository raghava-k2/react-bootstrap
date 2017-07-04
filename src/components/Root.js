import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'
//import Main from './Main'
import Home from '../components/homeCom/home'
import './Root.css'
let history = createBrowserHistory()
const Root = ({ store }) => (
    <Provider store={store}>
        <Router history={history}>
            <Route path='/' component={Home}></Route>
        </Router>
    </Provider>
)
export default Root