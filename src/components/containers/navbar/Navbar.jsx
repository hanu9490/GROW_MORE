import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { navbarIcons } from "../../../assets/icons/icons";
import { Link } from "react-scroll";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../../redux-store/slices/LoginSlice";
const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const { isLoggedIn, tokenValid } = useSelector((state) => state.user);

  // Define the scroll handler function
  const handleScroll = () => {
    window.scrollY > 50 ? setSticky(true) : setSticky(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

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
        <li className={isActiveRoute("/ourtrainings") ? "active-nav-item" : ""}>
          <Link
            onClick={() => {
              handleNavigation("/ourtrainings");
            }}
            smooth={true}
            offset={0}
            duration={500}
          >
            Our Trainings
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
        {isLoggedIn && tokenValid && (
          <li
            className={
              isActiveRoute("/admin/dashboard") ? "active-nav-item" : ""
            }
          >
            <Link
              onClick={() => {
                handleNavigation("/admin/dashboard");
              }}
              smooth={true}
              offset={0}
              duration={500}
            >
              Dashboard
            </Link>
          </li>
        )}

        {isLoggedIn && tokenValid ? (
          <li
            className={isActiveRoute("/admin/logout") ? "active-nav-item" : ""}
          >
            <Link
              onClick={() => {
                dispatch(logout());
                navigate("/");
              }}
              smooth={true}
              offset={0}
              duration={500}
            >
              Logout
            </Link>
          </li>
        ) : (
          <li className={isActiveRoute("admin/login") ? "active-nav-item" : ""}>
            <Link
              onClick={() => {
                handleNavigation("admin/login");
              }}
              smooth={true}
              offset={0}
              duration={500}
            >
              Login
            </Link>
          </li>
        )}
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
