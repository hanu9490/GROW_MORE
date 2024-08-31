import { useEffect, useState } from "react";
import "./Navbar.css";
import { navbarIcons } from "../../../assets/icons/icons";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
    return () => window.removeEventListener("scroll");
  }, []);

  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };

  return (
    <nav className={`nav-container ${sticky ? "dark-nav" : "light-nav"}`}>
      <img src={navbarIcons.growMore} alt="" className="logo" />
      <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
        <li>
          <Link
            onClick={() => {
              navigate("/");
            }}
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            onClick={() => {
              navigate("/whatwedo");
            }}
            smooth={true}
            offset={0}
            duration={500}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            onClick={() => {
              navigate("/services");
            }}
            smooth={true}
            offset={0}
            duration={500}
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            onClick={() => {
              navigate("/contactus");
            }}
            smooth={true}
            offset={0}
            duration={500}
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            onClick={() => { navigate("/carriers") }}
            smooth={true}
            offset={0}
            duration={500}
          >
            Carriers
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
