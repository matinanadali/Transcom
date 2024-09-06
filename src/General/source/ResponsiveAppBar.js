import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, Drawer, List, ListItem, ListItemText } from '@mui/material';
import TranslateIcon from '@mui/icons-material/Translate';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useNavigate } from "react-router-dom";
import '../styles/ResponsiveAppBar.css';

const ResponsiveAppBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const handleLogoClick = () => {
    navigate('/');
  }

  const drawer = (
    <div
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
          <ListItem button>
            <Link className="navLink" to="upload">
              Translate Comments
            </Link>
            <ListItemText />
          </ListItem>
          <ListItem button>
            <Link className="navLink" to="contact">
              Contact
            </Link>
            <ListItemText />
          </ListItem>
      </List>
    </div>
  );

  return (
    <AppBar position="static" sx={{flex: '0 1 auto', zIndex: '10'}}>
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer(true)}
          sx={{ display: { xs: 'block', md: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        <TranslateIcon style={{ fontSize: '3rem' }}/>
        <Typography variant="h1" sx={{ flexGrow: 1 }}>
          <div onClick={handleLogoClick} className='logo'>
          TransCom
          </div>
        </Typography>
        <Button color="inherit" sx={{ display: { xs: 'none', md: 'block' } }}>
          <Link to="upload" className="navLink">
          Translate comments
          </Link>
        </Button>
        <Button color="inherit" sx={{ display: { xs: 'none', md: 'block' } }}>
          <Link to="contact" className="navLink">
            Contact
          </Link>
        </Button>
      </Toolbar>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default ResponsiveAppBar;
