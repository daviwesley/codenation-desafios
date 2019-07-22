import React from "react";
import PropTypes from "prop-types";
import logo from "../logo.svg";
import { Link } from "react-router-dom";

const Navbar = ({ history, searchString }) => {
  // console.log(searchString);
  return (
    <nav className="navbar fixed-top navbar-expand-sm navbar-dark bg-dark">
      <div className="navbar-brand col-1">
        <Link to="/">
          <img src={logo} className="Navbar-logo" alt="logo" />
        </Link>
      </div>

      <div className="form-group justify-content-center row col-10 my-2">
        <input
          value={searchString}
          onChange={e => history.push(`/${e.target.value}`)}
          className="form-control col-9 mr-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  searchString: PropTypes.string,
  onChange: PropTypes.func
};

export default Navbar;
