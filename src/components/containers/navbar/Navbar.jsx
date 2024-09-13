import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { navbarIcons } from "../../../assets/icons/icons";
import { Link } from "react-scroll";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  // Define the scroll handler function
  const handleScroll = () => {
    window.scrollY > 50 ? setSticky(true) : setSticky(false);
  };

  useEffect(() => {
    // Add the event listener
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };

  // Function to check if the current route is active
  const isActiveRoute = (path) => {
    return location.pathname === path;
  };
  const handleNavigation = (path) => {
    navigate(path);
    setMobileMenu(false);
  };

  return (
    <nav className={`nav-container ${sticky ? "dark-nav" : "light-nav"}`}>
      <img
        src={navbarIcons.growMore}
        alt="Grow More"
        className="logo"
        onClick={() => {
          navigate("/");
          window.scroll(0, 0);
        }}
      />
      <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
        <li className={isActiveRoute("/") ? "active-nav-item" : ""}>
          <Link
            onClick={() => {
              handleNavigation("/");
            }}
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Home
          </Link>
        </li>

        <li className={isActiveRoute("/careers") ? "active-nav-item" : ""}>
          <Link
            onClick={() => {
              handleNavigation("/careers");
            }}
            smooth={true}
            offset={0}
            duration={500}
          >
            Careers
          </Link>
        </li>

        <li className={isActiveRoute("/services") ? "active-nav-item" : ""}>
          <Link
            onClick={() => {
              handleNavigation("/services");
            }}
            smooth={true}
            offset={0}
            duration={500}
          >
            Services
          </Link>
        </li>

        <li className={isActiveRoute("/contactus") ? "active-nav-item" : ""}>
          <Link
            onClick={() => {
              handleNavigation("/contactus");
            }}
            smooth={true}
            offset={0}
            duration={500}
          >
            Contact
          </Link>
        </li>

        <li className={isActiveRoute("/about") ? "active-nav-item" : ""}>
          <Link
            onClick={() => {
              handleNavigation("/about");
            }}
            smooth={true}
            offset={0}
            duration={500}
          >
            About
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