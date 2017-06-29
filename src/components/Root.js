import React, {Component} from 'react'
import {Provider} from 'react-redux'
import {Button} from 'react-bootstrap'
import DataGrid from './Grid/DataGrid'
import './Root.css'

class Root extends Component {
    constructor(props) {
        super(props)
        this.showPopup = this
            .showPopup
            .bind(this)
        this.state = {
            columns: [
                {
                    id: 'cols1',
                    type: 'checkbox',
                    input: true,
                    label: 'Col1',
                    onClick: (e) => {
                        console.log(e.target.value)
                    },
                    key: 'id'
                }, {
                    id: 'cols2',
                    label: 'Name',
                    key: 'name'
                }, {
                    id: 'cols3',
                    label: 'Age',
                    key: 'age'
                }
            ],
            rows: [
                {
                    id: 1234,
                    name: 'sham',
                    age: 20
                }, {
                    id: 123432423,
                    name: 'sham2',
                    age: 30
                }, {
                    id: 546,
                    name: 'sham3',
                    age: 40
                }
            ]
        }
    }
    showPopup(e) {
        this.setState({
            rows: [
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10
            ].map((obj, i) => {
                return {
                    id: Math.random() * i,
                    name: 'sham' + i,
                    age: 2 *i
                }
            }, this)
        })
    }
    render() {
        return (
            <Provider store={this.props.store}>
                <div>
                    <Button onClick={this.showPopup} type='button'>ClickMe</Button>
                    <DataGrid gridId="jobsGrid" rows={this.state.rows} columns={this.state.columns}></DataGrid>
                </div>
            </Provider>
        )
    }
}
export default Root