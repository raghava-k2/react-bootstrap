import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route } from 'react-router'
import { createBrowserHistory } from 'history'
import Main from './Main'
let history = createBrowserHistory()
const Root = ({ store }) => (
    <Provider store={store}>
        <Router history={history}>
            <Route path='/' component={Main}></Route>
        </Router>
    </Provider>
)
export default Root