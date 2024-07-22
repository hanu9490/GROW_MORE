import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';


const Navbar = () => {
  return (
    <AppBar position="static" sx={{ bgcolor: 'white' }}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          {/* <MenuIcon /> */}
          <img/>
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'black' }}>
          Logo
        </Typography>
        <Box>
          <Button color="inherit" sx={{ color: 'black' }}>Home</Button>
          <Button color="inherit" sx={{ color: 'black' }}>About</Button>
          <Button color="inherit" sx={{ color: 'black' }}>Contact</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
