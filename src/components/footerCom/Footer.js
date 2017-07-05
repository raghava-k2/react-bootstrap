import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import './footer.css'
class Footer extends Component {
    constructor(props) {
        super(props)
        console.log(this)
    }
    render() {
        return (
            <Paper zDepth={1} className='footer'>
                <h3>@CopyRight</h3>
            </Paper>
        );
    }
}

export default Footer