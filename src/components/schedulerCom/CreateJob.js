import React, {Component} from 'react';
import PropTypes from 'prop-types'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import Checkbox from 'material-ui/Checkbox';
import Toggle from 'material-ui/Toggle';
import TextField from 'material-ui/TextField';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

export default class CreateJob extends Component {
    static propTypes = {
        match: PropTypes.object.isRequired,
        showCreateJobDialog: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props)
        this.handleClose = this
            .handleClose
            .bind(this)
        this.handleSubmit = this
            .handleSubmit
            .bind(this)
        this.styles = {
            root: {
                display: 'flex',
                flexWrap: 'wrap'
            }
        }
    }

    handleClose() {
        this
            .props
            .showCreateJobDialog(false)
    }

    handleSubmit() {
        this
            .props
            .showCreateJobDialog(false)
    }

    render() {
        const actions = [ < FlatButton label = "Cancel" primary = {
                true
            }
            onTouchTap = {
                this.handleClose
            } />, < FlatButton label = "Submit" primary = {
                true
            }
            keyboardFocused = {
                true
            }
            onTouchTap = {
                this.handleSubmit
            } />
        ];

        return (
            <div className='jobDialog'>
                <Dialog
                    title="Create Job"
                    actions={actions}
                    modal={false}
                    open={this.props.show}
                    onRequestClose={this.handleClose}
                    autoScrollBodyContent={true}>
                    <div style={this.styles.root}>
                        <section>
                            <List>
                                <Subheader>Job Details</Subheader>
                                <TextField
                                    hintText="ex:orpan job"
                                    errorText="This field is required"
                                    floatingLabelText="Enter Job Name"/><br/>
                                <TextField
                                    hintText="ex:daily runs"
                                    errorText="This field is required"
                                    floatingLabelText="Enter Job Group Name"/>
                            </List>
                            <Divider/>
                            <List>
                                <Subheader>Hangout Notifications</Subheader>
                                <RadioButtonGroup name="shipSpeed" defaultSelected="not_light">
                                    <RadioButton value="daily" label="Daily"/>
                                    <RadioButton value="weekly" label="Weekly"/>
                                    <RadioButton value="monthly" label="Monthly"/>
                                    <RadioButton value="yearly" label="Yearly"/>
                                </RadioButtonGroup>
                            </List>
                        </section>
                        <section>
                            <List>
                                <ListItem
                                    primaryText="When calls and notifications arrive"
                                    secondaryText="Always interrupt"/>
                            </List>
                            <Divider/>
                            <List>
                                <Subheader>Priority Interruptions</Subheader>
                                <ListItem primaryText="Events and reminders" rightToggle={< Toggle />}/>
                                <ListItem primaryText="Calls" rightToggle={< Toggle />}/>
                                <ListItem primaryText="Messages" rightToggle={< Toggle />}/>
                            </List>
                            <Divider/>
                            <List>
                                <Subheader>Hangout Notifications</Subheader>
                                <ListItem primaryText="Notifications" leftCheckbox={< Checkbox />}/>
                                <ListItem primaryText="Sounds" leftCheckbox={< Checkbox />}/>
                                <ListItem primaryText="Video sounds" leftCheckbox={< Checkbox />}/>
                            </List>
                        </section>
                    </div>
                </Dialog>
            </div>
        );
    }
}