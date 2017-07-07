import React, {Component} from 'react';
import PropTypes from 'prop-types'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

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
                    title="Scrollable Dialog"
                    actions={actions}
                    modal={false}
                    open={this.props.show}
                    onRequestClose={this.handleClose}
                    autoScrollBodyContent={true}>
                    <h1>Inside dialog
                    </h1>
                </Dialog>
            </div>
        );
    }
}