import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn
} from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import CreateJob from '../../containers/schedulerCon/CreateJobContainer'

class Scheduler extends Component {
    static propTypes = {
        match: PropTypes.object.isRequired,
        createJobData: PropTypes.object.isRequired,
        showCreateJobDialog: PropTypes.func.isRequired
    }
    constructor(props) {
        super(props)
        this.handleDialog = this
            .handleDialog
            .bind(this)
    }

    handleDialog() {
        this
            .props
            .showCreateJobDialog(true)
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
                                <TableRowColumn><RaisedButton label="Update" onTouchTap={this.handleDialog}/></TableRowColumn>
                            </TableRow>
                            <TableRow>
                                <TableRowColumn>2</TableRowColumn>
                                <TableRowColumn>Randal White</TableRowColumn>
                                <TableRowColumn>Unemployed</TableRowColumn>
                                <TableRowColumn><RaisedButton label="Update" onTouchTap={this.handleDialog}/></TableRowColumn>
                            </TableRow>
                            <TableRow>
                                <TableRowColumn>3</TableRowColumn>
                                <TableRowColumn>Stephanie Sanders</TableRowColumn>
                                <TableRowColumn>Employed</TableRowColumn>
                                <TableRowColumn><RaisedButton label="Update" onTouchTap={this.handleDialog}/></TableRowColumn>
                            </TableRow>
                            <TableRow>
                                <TableRowColumn>4</TableRowColumn>
                                <TableRowColumn>Steve Brown</TableRowColumn>
                                <TableRowColumn>Employed</TableRowColumn>
                                <TableRowColumn><RaisedButton label="Update" onTouchTap={this.handleDialog}/></TableRowColumn>
                            </TableRow>
                            <TableRow>
                                <TableRowColumn>5</TableRowColumn>
                                <TableRowColumn>Christopher Nolan</TableRowColumn>
                                <TableRowColumn>Unemployed</TableRowColumn>
                                <TableRowColumn><RaisedButton label="Update" onTouchTap={this.handleDialog}/></TableRowColumn>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Paper>
                <CreateJob show={this.props.createJobData.show}/>
            </div>
        )
    }
}
export default Scheduler