import React, { memo } from 'react';

import classes from './Toolbar.module.css';

import Logo from './../../Logo/Logo';

import NavigationItems from './../NavigationItems/NavigationItems';

import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = (props) => {
  return (
    <header className={classes.Toolbar}>
      <DrawerToggle click={props.opened} />
      <Logo styles={{ height: '80%' }} />
      <nav className={classes.DesktopOnly}>
        <NavigationItems />
      </nav>
    </header>
  );
};

export default memo(toolbar);
