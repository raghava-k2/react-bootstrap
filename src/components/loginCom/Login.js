import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Button} from 'react-bootstrap'
import FieldGroup from '../util/util'
import './login.css'
class Login extends Component {
    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    }
    constructor(props) {
        super(props)
        this.user = this.pwd = ''
    }
    render() {
        return (
            <div className='login'>
                <form
                    onSubmit={e => {
                    e.preventDefault();
                    this.props.history.push('/home')
                }}>
                    <FieldGroup
                        id='user'
                        type='text'
                        label='User'
                        placeholder='Enter UserName'
                        onChange={e => this.user = e.target.value}/>
                    <FieldGroup
                        id='pwd'
                        type='password'
                        label='Password'
                        placeholder='Enter Password'
                        onChange={e => this.pwd = e.target.value}/>
                    <Button type="submit" bsStyle="primary">
                        Submit</Button>
                </form>
            </div>

        )
    }
}
export default Login