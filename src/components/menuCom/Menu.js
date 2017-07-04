import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'

export default class Menu extends Component {
    static propTypes={
        showMenuDrawer:PropTypes.func.isRequired
    }
    constructor(props) {
        super(props);
        this.handleClose=this.handleClose.bind(this)
    }
    handleClose(){
        this.props.showMenuDrawer(false)
    }
    render() {
        return (
            <div>
                <Drawer
                    docked={false}
                    width={200}
                    open={this.props.show}
                    onRequestChange={(open) =>this.handleClose()}>
                    <MenuItem onTouchTap={this.handleClose}>Home</MenuItem>
                    <MenuItem onTouchTap={this.handleClose}>Scheduler</MenuItem>
                </Drawer>
            </div>
        );
    }
}