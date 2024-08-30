import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, Drawer, List, ListItem, ListItemText } from '@mui/material';
import TranslateIcon from '@mui/icons-material/Translate';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";
import '../styles/ResponsiveAppBar.css';

const pages = ['Home', 'About', 'Contact'];

const ResponsiveAppBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const drawer = (
    <div
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {pages.map((text) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <AppBar position="static">
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
          TransCom
        </Typography>
        <Button color="inherit" sx={{ display: { xs: 'none', md: 'block' } }}>
          <Link to="upload" className="navLink">
          Translate comments
          </Link>
        </Button>
        <Button color="inherit" sx={{ display: { xs: 'none', md: 'block' } }}>
          How to use
        </Button>
        <Button color="inherit" sx={{ display: { xs: 'none', md: 'block' } }}>
          Contact
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
