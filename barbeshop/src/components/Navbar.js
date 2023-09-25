import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Navbar.css"
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

function Navbar() {
  return (
    <nav>
      <ul>
        <a className="active">
          <Link to="/">
            <button>Home</button>
          </Link>
        </a>
        <a>
          <Link to="/about">
            <button>About</button>
          </Link>
        </a>
      </ul>
    </nav>
  );
}
export default Navbar;



