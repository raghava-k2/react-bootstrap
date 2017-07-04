import React, {Component} from 'react';
import PropTypes from 'prop-types'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import Menu from '../../containers/menuCon/MenuContainer'
class Home extends Component {
     static propTypes = {
       homePageData:PropTypes.object.isRequired,
       showMenuDrawer:PropTypes.func.isRequired
    }
    
    constructor(props) {
        super(props)
        this.showMenu = this
            .showMenu
            .bind(this)
    }
    showMenu() {
        this.props.showMenuDrawer(true)
    }
    render() {
        return (
            <div className='home'>
                <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                    <AppBar
                        title="GLI"
                        iconElementRight={< Logged />}
                        onLeftIconButtonTouchTap={this.showMenu}>
                        <Menu show={this.props.homePageData.show}/>
                    </AppBar>
                </MuiThemeProvider>
            </div>
        )
    }
}
const Logged = (props) => (
    <IconMenu
        {...props}
        iconButtonElement={< IconButton > <MoreVertIcon/> < /IconButton>}
        targetOrigin={{
        horizontal: 'right',
        vertical: 'top'
    }}
        anchorOrigin={{
        horizontal: 'right',
        vertical: 'top'
    }}>
        <MenuItem primaryText="Refresh"/>
        <MenuItem primaryText="Help"/>
        <MenuItem primaryText="Sign out"/>
    </IconMenu>
);
Logged.muiName = 'IconMenu';

export default Home