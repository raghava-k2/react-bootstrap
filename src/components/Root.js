import React from 'react'
import {Provider} from 'react-redux'
import {Router, Route, Switch} from 'react-router'
import {createBrowserHistory} from 'history'
import Main from './Main'
import Home from '../containers/homeCon/HomeContainer'
import './Root.css'
let history = createBrowserHistory()
const Root = ({store}) => (
    <Provider store={store}>
        <Router history={history}>
            <Switch>
                <Route exact path="/" component={Main}/>
                <Route path="/home" component={Home}/>
            </Switch>
        </Router>
    </Provider>
)
export default Root