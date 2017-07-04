import React, {Component} from 'react'
class Scheduler extends Component {
    constructor(props) {
        super(props)
        console.log(this)
    }
    render() {
        return (
            <div className='scheduler'>
                <h1>Inisde scheduler</h1>
            </div>
        )
    }
}
export default Scheduler