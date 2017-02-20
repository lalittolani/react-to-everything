import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

import { closeDrawer } from '../../actions/navigationActions';

@connect(store => ({
  navigation: store.navigation,
}))
@withRouter
export default class Base extends React.Component {
  handleClose() {
    this.props.dispatch(closeDrawer());
  }
  goToSettings() {
    this.handleClose();
    this.props.router.push('settings');
  }
  goToHome() {
    this.handleClose();
    this.props.router.push('/');
  }
  render() {
    return (
      <Drawer
          docked={false}
          open={this.props.navigation.openDrawer}
      >
        <MenuItem onTouchTap={this.goToHome.bind(this)}>Home</MenuItem>
        <MenuItem onTouchTap={this.goToSettings.bind(this)}>Settings</MenuItem>
      </Drawer>
    );
  }
}

Base.propTypes = {
  dispatch: React.PropTypes.func,
  navigation: React.PropTypes.object,
};
