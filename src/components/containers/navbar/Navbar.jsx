<<<<<<< HEAD
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

=======
import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { navbarIcons } from "../../../assets/icons/icons";
import { Link } from "react-scroll";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 100 ? setSticky(true) : setSticky(false);
    });
    return () => window.removeEventListener("scroll");
  }, []);

  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };

  return (
    <nav className={`nav-container ${sticky ? "dark-nav" : ""}`}>
      <img src={navbarIcons.growMore} alt="" className="logo" />
      <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
        <li>
          <Link to="hero" spy={true} smooth={true} offset={-100} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} offset={0} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="carrers" smooth={true} offset={0} duration={500}>
            Carrers
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} offset={0} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      <img
        className="menu-icon"
        src={navbarIcons.menuIcon}
        alt="menuIcon"
        onClick={toggleMenu}
      />
    </nav>
  );
};

>>>>>>> 8d34c8c2aa27450585cee4cb47454539add249f1
export default Navbar;
