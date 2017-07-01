import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import FieldGroup from '../util/util'
import './login.css'
class Login extends Component {
    constructor(props) {
        super(props)
        this.user=this.pwd=''
    }
    render() {
        return (
            <div className='login'>
                <form onSubmit={e => {
                    e.preventDefault();
                    console.log(this)
                }}>
                    <FieldGroup
                        id='user'
                        type='text'
                        label='User'
                        placeholder='Enter UserName'
                        onChange={e => this.user = e.target.value} />
                    <FieldGroup
                        id='pwd'
                        type='password'
                        label='Password'
                        placeholder='Enter Password'
                        onChange={e => this.pwd = e.target.value} />
                    <Button type="submit" bsStyle="primary">
                        Submit</Button>
                </form>
            </div>

        )
    }
}
export default Login