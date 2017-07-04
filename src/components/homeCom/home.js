import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
class Home extends Component {
    constructor(props) {
        super(props)
        console.log(this)
    }
    render() {
        return (
            <div>
                <h1>hadsasd</h1>
                <MuiThemeProvider>
                    <RaisedButton label="default">LOGIN</RaisedButton>
                </MuiThemeProvider>
            </div>
        )
    }
}
export default Home