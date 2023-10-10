import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggleIcon, setToggleIcon] = useState(false);

  return (
    <nav className="navbar">
      <Link to="." className="navbar__logo">
        <img src="./images/logo.svg" alt="Logo" />
        <span className="navbar__logo--text">Pixel Sangam</span>
      </Link>
      <div
        onClick={() => setToggleIcon((prevVal) => !prevVal)}
        aria-hidden={toggleIcon}
        className="navbar__menu"
      >
        <div className="navbar__menu--bars"></div>
        <div className="navbar__menu--bars"></div>
        <div className="navbar__menu--bars"></div>
      </div>
      <div aria-hidden={!toggleIcon} className="navbar__links">
        <Link
          onClick={() => setToggleIcon(false)}
          to="/"
          className="navbar__links--link"
        >
          Home
        </Link>
        <Link
          to="about"
          onClick={() => setToggleIcon(false)}
          className="navbar__links--link"
        >
          About
        </Link>
        <Link
          to="contact"
          className="navbar__links--link"
          onClick={() => setToggleIcon(false)}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
