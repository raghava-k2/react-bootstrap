import React, { Component } from 'react'
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
class Scheduler extends Component {
    constructor(props) {
        super(props)
        console.dir(this)
    }
    render() {
        return (
            <div className='scheduler'>
                <Paper zDepth={1}>
                    <h1>Daliy Scheduler</h1>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHeaderColumn>ID</TableHeaderColumn>
                                <TableHeaderColumn>Name</TableHeaderColumn>
                                <TableHeaderColumn>Status</TableHeaderColumn>
                                <TableHeaderColumn>Action</TableHeaderColumn>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableRowColumn>1</TableRowColumn>
                                <TableRowColumn>John Smith</TableRowColumn>
                                <TableRowColumn>Employed</TableRowColumn>
                                <TableRowColumn><RaisedButton label="Delete" /></TableRowColumn>
                            </TableRow>
                            <TableRow>
                                <TableRowColumn>2</TableRowColumn>
                                <TableRowColumn>Randal White</TableRowColumn>
                                <TableRowColumn>Unemployed</TableRowColumn>
                                <TableRowColumn><RaisedButton label="Delete" /></TableRowColumn>
                            </TableRow>
                            <TableRow>
                                <TableRowColumn>3</TableRowColumn>
                                <TableRowColumn>Stephanie Sanders</TableRowColumn>
                                <TableRowColumn>Employed</TableRowColumn>
                                <TableRowColumn><RaisedButton label="Delete" /></TableRowColumn>
                            </TableRow>
                            <TableRow>
                                <TableRowColumn>4</TableRowColumn>
                                <TableRowColumn>Steve Brown</TableRowColumn>
                                <TableRowColumn>Employed</TableRowColumn>
                                <TableRowColumn><RaisedButton label="Delete" /></TableRowColumn>
                            </TableRow>
                            <TableRow>
                                <TableRowColumn>5</TableRowColumn>
                                <TableRowColumn>Christopher Nolan</TableRowColumn>
                                <TableRowColumn>Unemployed</TableRowColumn>
                                <TableRowColumn><RaisedButton label="Delete" /></TableRowColumn>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Paper>
            </div>
        )
    }
}
export default Scheduler