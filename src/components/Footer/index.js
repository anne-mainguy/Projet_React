import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';

import brain from '../../assets/img/brain.png';

const Footer = () => {
  return (
    <footer>
      <Navbar bg="dark" variant="dark" className="flex-column pt-3">

        <Link to="/">
          <img src={brain} alt="logo" className="logo" />
        </Link>
        <Nav defaultActiveKey="/home" as="ul" className="justify-content-center">
          <Nav.Item as="li">
            <NavLink className="nav-link" to="/">Accueil</NavLink>
          </Nav.Item>
        </Nav>
      </Navbar>
    </footer>
  );
};

export default Footer;
