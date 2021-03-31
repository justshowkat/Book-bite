import React from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import './HomeNav.css'

const HomeNav = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <div className="container">
          <Navbar.Brand>
            <Link className='custom-link' to="/">Book Bite</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <Nav>
              <Nav.Link ><Link className='custom-link' to="/">Home</Link></Nav.Link>
              <Nav.Link ><Link className='custom-link' to="/checkout">Orders</Link></Nav.Link>
              <Nav.Link ><Link className='custom-link' to="/admin">Admin</Link></Nav.Link>
              <Link className='custom-link' to="/admin"><Button variant="outline-warning">Login</Button></Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default HomeNav;
