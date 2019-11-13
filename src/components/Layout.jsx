import React from 'react';
import propTypes from 'prop-types';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import IconBuild from '@material-ui/icons/Build';
import IconHome from '@material-ui/icons/Home';

import '../logo.svg';
import '../App.css';

let anchorMenu = null;

const MenuScripts = props => {
  const [setAnchorEl] = React.useState(null);
  const { isActive } = props;

  if (isActive && !anchorMenu) {
    setAnchorEl(anchorMenu);
  }

  return <Menu
    id="menu-scripts"
    keepMounted
    open={isActive}
    anchorEl={anchorMenu}
  >
    <MenuItem onClick={props.onMenuItemClick('hash_generator')}>Hash generator</MenuItem>
    <MenuItem onClick={props.onMenuItemClick('password_generator')}>Password generator</MenuItem>
    <MenuItem onClick={props.onMenuItemClick('timestamp_converter')}>Timestamp converter</MenuItem>
  </Menu>;
};

class Layout extends React.Component {
	constructor(props) {
		super(props);

    this.gotoHome = this.gotoHome.bind(this);
    this.onMainMenuItemClick = this.onMainMenuItemClick.bind(this);
    this.onChildMenuItemClick = this.onChildMenuItemClick.bind(this);
  }

  gotoHome() {
    this.props.history.push('/');
  }

  onChildMenuItemClick(code) {
    return e => {
      this.props.menuChildItemSelected();
      this.props.history.push(`/scripts/${code}`);
    };
  }

  onMainMenuItemClick(code) {
    return e => {
      anchorMenu = e.currentTarget;
      this.props.menuMainItemSelected(code);
    };
  }

  handleClose() {
    this.setAnchorEl(null);
  }


  render() {
    return (
      <Container>
        <Box>
          <Button onClick={this.gotoHome}>
            <IconHome style={{ fontSize: '1em' }} />
            Home
          </Button>
          <Button onClick={this.onMainMenuItemClick('scripts')}>
            <IconBuild style={{ fontSize: '1em' }} />
            Scripts
          </Button>

          <MenuScripts
            isActive={'scripts' === this.props.activeMenu}
            onMenuItemClick={this.onChildMenuItemClick}
          />
        </Box>
        <div>
          <h1>{this.props.header}</h1>
          { this.props.children }
        </div>
      </Container>
    );
  }
}

Layout.propTypes = {
  activeMenu: propTypes.string,
  header: propTypes.string,
  menuChildItemSelected: propTypes.func.isRequired,
  menuMainItemSelected: propTypes.func.isRequired,
};

export default Layout;