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

export default Navbar;
