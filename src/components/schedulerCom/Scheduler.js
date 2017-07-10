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
import {Label} from 'react-bootstrap'
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

    handleDialog(e) {
        e.preventDefault()
        this
            .props
            .showCreateJobDialog(true)
    }

    render() {
        return (
            <div className='scheduler'>
                <Paper zDepth={1}>
                    <Label>Job Scheduler/Monitor</Label>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHeaderColumn>Job</TableHeaderColumn>
                                <TableHeaderColumn>GroupName</TableHeaderColumn>
                                <TableHeaderColumn>StartDate</TableHeaderColumn>
                                <TableHeaderColumn>Status</TableHeaderColumn>
                                <TableHeaderColumn>UserName</TableHeaderColumn>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {[1, 2, 3, 4, 5].map((obj, i) => { 
                                return (
                                    <TableRow> 
                                        <TableRowColumn><a href='' onClick={this.handleDialog}>{obj}</a></TableRowColumn> 
                                        <TableRowColumn> group{obj} </TableRowColumn>
                                        <TableRowColumn>{new Date().toLocaleDateString()}</TableRowColumn>
                                        <TableRowColumn>status{obj}</TableRowColumn>
                                        <TableRowColumn>username{obj}</TableRowColumn>
                                   </TableRow>
                                )
                            })}

                        </TableBody>
                    </Table>
                </Paper>
                <CreateJob show={this.props.createJobData.show}/>
            </div>
        )
    }
}
export default Scheduler