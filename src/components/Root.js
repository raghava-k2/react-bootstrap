import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route, Switch } from 'react-router'
import { createBrowserHistory } from 'history'
import Main from './Main'
import Home from '../containers/homeCon/HomeContainer'
import darkBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import './Root.css'
let history = createBrowserHistory()
const Root = ({ store }) => (
    <Provider store={store}>
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
            <Router history={history}>
                <Switch>
                    <Route exact path="/" component={Main} />
                    <Route path="/home" component={Home} />
                </Switch>
            </Router>
        </MuiThemeProvider>
    </Provider>
)
export default Root